-- Tempelgasse 7 — Gabbai area: members, amounts owed / paid, monthly e-mail reminders.
-- Only a 'gabbai' session (own code, set by the admin) can read or change any of this.
-- Safe to run again.

create extension if not exists pg_net;
create extension if not exists pg_cron;

-- a third role next to team and admin
alter table ops_sessions drop constraint if exists ops_sessions_role_check;
alter table ops_sessions add constraint ops_sessions_role_check check (role in ('staff','manager','gabbai'));

create or replace function ops_sess(p_token uuid, p_need text default 'staff')
returns ops_sessions language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions;
begin
  select * into s from ops_sessions where token = p_token and last_seen > now() - interval '90 days';
  if s.token is null then raise exception 'ops:auth'; end if;
  if p_need in ('manager','gabbai') and s.role <> p_need then raise exception 'ops:forbidden'; end if;
  if s.last_seen < now() - interval '1 hour' then update ops_sessions set last_seen = now() where token = p_token; end if;
  return s;
end $$;
revoke execute on function ops_sess(uuid,text) from public, anon, authenticated;

create table if not exists g_members (
  id bigserial primary key, name text not null, email text, phone text, note text,
  active boolean not null default true, created_at timestamptz not null default now());
-- kind: charge = he owes this amount, payment = he paid
create table if not exists g_entries (
  id bigserial primary key, member_id bigint not null references g_members(id),
  kind text not null check (kind in ('charge','payment')), amount numeric(10,2) not null check (amount > 0),
  what text, on_date date not null default current_date, by_name text not null,
  created_at timestamptz not null default now());
create table if not exists g_mails (
  id bigserial primary key, member_id bigint references g_members(id), email text, amount numeric(10,2),
  kind text not null default 'monthly', request_id bigint, status text not null default 'sent', info text,
  at timestamptz not null default now());

do $$ declare t text; begin
  foreach t in array array['g_members','g_entries','g_mails'] loop
    execute format('alter table %I enable row level security', t);
    execute format('revoke all on %I from anon, authenticated', t);
  end loop;
end $$;

-- ---------- sign in (same lockout as team/admin) ----------
create or replace function g_login(p_name text, p_pass text)
returns uuid language plpgsql security definer set search_path = public, extensions as $$
declare h text; t uuid;
begin
  if coalesce(trim(p_name),'') = '' then raise exception 'ops:name'; end if;
  select v into h from ops_settings where k = 'gabbai_pass';
  if h is null then raise exception 'ops:nogabbai'; end if;
  if (select count(*) from ops_fails where kind='gabbai' and at > now() - interval '15 minutes') >= 10 then raise exception 'ops:locked'; end if;
  if crypt(coalesce(p_pass,''), h) <> h then
    delete from ops_fails where at < now() - interval '1 day';
    insert into ops_fails(kind) values ('gabbai'); perform pg_sleep(1.5); return null;
  end if;
  insert into ops_sessions(name, role) values (left(trim(p_name), 40), 'gabbai') returning token into t;
  return t;
end $$;

-- the admin sets (or resets) the gabbai code in "Mehr"
create or replace function g_set_pass(p_token uuid, p_pass text)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'manager');
  if length(coalesce(p_pass,'')) < 4 then raise exception 'ops:short'; end if;
  insert into ops_settings(k, v) values ('gabbai_pass', crypt(p_pass, gen_salt('bf'))) on conflict (k) do update set v = excluded.v;
  delete from ops_sessions where role = 'gabbai';
end $$;

create or replace function g_has_pass(p_token uuid)
returns boolean language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'manager'); return exists(select 1 from ops_settings where k='gabbai_pass'); end $$;

-- ---------- members ----------
create or replace function g_balance(p_member bigint)
returns numeric language sql stable security definer set search_path = public, extensions as $$
  select coalesce(sum(case kind when 'charge' then amount else -amount end),0) from g_entries where member_id = p_member; $$;
revoke execute on function g_balance(bigint) from public, anon, authenticated;

create or replace function g_members_list(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'gabbai');
  return coalesce((select json_agg(row_to_json(m) order by lower(m.name)) from (
    select m.*, g_balance(m.id) as balance,
      (select max(at) from g_mails x where x.member_id = m.id) as last_mail
    from g_members m where m.active) m), '[]'::json);
end $$;

create or replace function g_member_save(p_token uuid, p jsonb)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare nid bigint; em text := nullif(lower(trim(p->>'email')),'');
begin
  perform ops_sess(p_token, 'gabbai');
  if coalesce(trim(p->>'name'),'') = '' then raise exception 'ops:name'; end if;
  if em is not null and em !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'ops:email'; end if;
  if coalesce(p->>'id','') = '' then
    insert into g_members(name,email,phone,note) values (left(trim(p->>'name'),100), em,
      nullif(left(trim(p->>'phone'),40),''), nullif(left(trim(p->>'note'),500),'')) returning id into nid;
    return nid;
  end if;
  update g_members set name=left(trim(p->>'name'),100), email=em, phone=nullif(left(trim(p->>'phone'),40),''),
    note=nullif(left(trim(p->>'note'),500),'') where id = (p->>'id')::bigint;
  return (p->>'id')::bigint;
end $$;

create or replace function g_member_delete(p_token uuid, p_id bigint)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'gabbai'); update g_members set active = false where id = p_id; end $$;

-- ---------- amounts ----------
create or replace function g_entries_list(p_token uuid, p_member bigint)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'gabbai');
  return coalesce((select json_agg(row_to_json(e) order by e.on_date desc, e.id desc) from g_entries e where e.member_id = p_member), '[]'::json);
end $$;

create or replace function g_entry_add(p_token uuid, p_member bigint, p_kind text, p_amount numeric, p_what text, p_date date)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token, 'gabbai'); nid bigint;
begin
  if p_kind not in ('charge','payment') then raise exception 'ops:kind'; end if;
  if coalesce(p_amount,0) <= 0 or p_amount > 1000000 then raise exception 'ops:amount'; end if;
  if not exists(select 1 from g_members where id = p_member and active) then raise exception 'ops:member'; end if;
  insert into g_entries(member_id,kind,amount,what,on_date,by_name)
    values (p_member,p_kind,round(p_amount,2),nullif(left(trim(p_what),200),''),coalesce(p_date,current_date),s.name) returning id into nid;
  return nid;
end $$;

create or replace function g_entry_delete(p_token uuid, p_id bigint)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'gabbai'); delete from g_entries where id = p_id; end $$;

-- ---------- e-mail settings (the API key itself lives in Supabase Vault as 'mail_api_key') ----------
create or replace function g_settings(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'gabbai');
  return json_build_object(
    'provider', coalesce((select v from ops_settings where k='g_provider'),'brevo'),
    'from_name', coalesce((select v from ops_settings where k='g_from_name'),'Synagoge Tempelgasse 7'),
    'from_email', (select v from ops_settings where k='g_from_email'),
    'pay_info', (select v from ops_settings where k='g_pay_info'),
    'monthly', coalesce((select v from ops_settings where k='g_monthly'),'on') = 'on',
    'has_key', exists(select 1 from vault.decrypted_secrets where name = 'mail_api_key'));
end $$;

create or replace function g_settings_save(p_token uuid, p jsonb)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare r record;
begin
  perform ops_sess(p_token, 'gabbai');
  if nullif(trim(p->>'from_email'),'') is not null and trim(p->>'from_email') !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'ops:email'; end if;
  for r in select * from (values ('g_provider', case when p->>'provider' in ('brevo','resend') then p->>'provider' else 'brevo' end),
      ('g_from_name', left(trim(p->>'from_name'),80)), ('g_from_email', lower(trim(p->>'from_email'))),
      ('g_pay_info', left(trim(p->>'pay_info'),1000)), ('g_monthly', case when (p->>'monthly')::boolean then 'on' else 'off' end)) v(k,val) loop
    if nullif(r.val,'') is null then delete from ops_settings where k = r.k;
    else insert into ops_settings(k,v) values (r.k, r.val) on conflict (k) do update set v = excluded.v; end if;
  end loop;
end $$;

-- ---------- sending ----------
create or replace function g_esc(t text) returns text language sql immutable as $$
  select replace(replace(replace(coalesce(t,''),'&','&amp;'),'<','&lt;'),'>','&gt;') $$;
create or replace function g_eur(n numeric) returns text language sql immutable as $$
  select replace(replace(replace(to_char(n,'FM999G999G990D00'),',','#'),'.',','),'#','.') || ' €' $$;

-- Hands one e-mail to the mail service (asynchronously, via pg_net) and logs it.
create or replace function g_mail_one(p_member bigint, p_to text, p_kind text, p_amount numeric, p_subject text, p_html text)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare key text; prov text; fe text; fn text; rid bigint; mid bigint;
begin
  select decrypted_secret into key from vault.decrypted_secrets where name = 'mail_api_key' limit 1;
  prov := coalesce((select v from ops_settings where k='g_provider'),'brevo');
  fe := (select v from ops_settings where k='g_from_email');
  fn := coalesce((select v from ops_settings where k='g_from_name'),'Synagoge Tempelgasse 7');
  if key is null then raise exception 'ops:nokey'; end if;
  if fe is null then raise exception 'ops:nofrom'; end if;
  if prov = 'resend' then
    rid := net.http_post('https://api.resend.com/emails',
      jsonb_build_object('from', fn||' <'||fe||'>', 'to', jsonb_build_array(p_to), 'subject', p_subject, 'html', p_html, 'reply_to', fe),
      '{}'::jsonb, jsonb_build_object('Authorization','Bearer '||key,'Content-Type','application/json'), 15000);
  else
    rid := net.http_post('https://api.brevo.com/v3/smtp/email',
      jsonb_build_object('sender', jsonb_build_object('name',fn,'email',fe), 'to', jsonb_build_array(jsonb_build_object('email',p_to)),
                         'subject', p_subject, 'htmlContent', p_html, 'replyTo', jsonb_build_object('email',fe)),
      '{}'::jsonb, jsonb_build_object('api-key',key,'Content-Type','application/json','Accept','application/json'), 15000);
  end if;
  insert into g_mails(member_id,email,amount,kind,request_id,status) values (p_member,p_to,p_amount,p_kind,rid,'pending') returning id into mid;
  return mid;
end $$;
revoke execute on function g_mail_one(bigint,text,text,numeric,text,text) from public, anon, authenticated;

create or replace function g_reminder_html(p_member bigint, p_name text, p_balance numeric)
returns text language plpgsql stable security definer set search_path = public, extensions as $$
declare rows text; pay text := (select v from ops_settings where k='g_pay_info');
begin
  select string_agg(format('<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">%s</td><td style="padding:6px 10px;border-bottom:1px solid #eee">%s</td><td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;white-space:nowrap">%s</td></tr>',
      to_char(e.on_date,'DD.MM.YYYY'), g_esc(coalesce(e.what, case e.kind when 'charge' then 'Spende / Kauf' else 'Zahlung' end)),
      case e.kind when 'charge' then g_eur(e.amount) else '− '||g_eur(e.amount) end), '' order by e.on_date desc, e.id desc)
    into rows from (select * from g_entries where member_id = p_member order by on_date desc, id desc limit 12) e;
  return '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1b2230;max-width:560px">'
    || '<p>Schalom ' || g_esc(p_name) || ',</p>'
    || '<p>laut unseren Unterlagen ist bei dir derzeit ein Betrag von <b>' || g_eur(p_balance) || '</b> offen.</p>'
    || '<table style="border-collapse:collapse;width:100%;font-size:14px;margin:14px 0"><tr style="background:#f6f4ef"><th style="padding:6px 10px;text-align:left">Datum</th><th style="padding:6px 10px;text-align:left">Wofür</th><th style="padding:6px 10px;text-align:right">Betrag</th></tr>'
    || coalesce(rows,'') || '<tr><td></td><td style="padding:8px 10px;font-weight:bold">Offen</td><td style="padding:8px 10px;text-align:right;font-weight:bold;white-space:nowrap">' || g_eur(p_balance) || '</td></tr></table>'
    || case when pay is not null then '<p style="white-space:pre-line">' || g_esc(pay) || '</p>' else '' end
    || '<p>Vielen Dank und Kol Tuv!<br>Der Gabbai der Synagoge Tempelgasse 7</p>'
    || '<p style="color:#878c94;font-size:12px">Falls du schon bezahlt hast, betrachte diese Nachricht bitte als gegenstandslos. Fragen? Antworte einfach auf diese E-Mail.</p></div>';
end $$;
revoke execute on function g_reminder_html(bigint,text,numeric) from public, anon, authenticated;

-- Sends a reminder to every active member with an e-mail and an open balance.
-- p_monthly = true (the automatic run) skips anyone already reminded this month.
create or replace function g_send_reminders(p_monthly boolean default true)
returns int language plpgsql security definer set search_path = public, extensions as $$
declare m record; n int := 0;
begin
  if p_monthly and coalesce((select v from ops_settings where k='g_monthly'),'on') <> 'on' then return 0; end if;
  for m in select g.id, g.name, g.email, g_balance(g.id) as bal from g_members g
           where g.active and g.email is not null and g_balance(g.id) > 0 loop
    if p_monthly and exists(select 1 from g_mails x where x.member_id = m.id and x.kind='monthly'
                            and date_trunc('month', x.at) = date_trunc('month', now())) then continue; end if;
    perform g_mail_one(m.id, m.email, case when p_monthly then 'monthly' else 'manual' end, m.bal,
      'Offener Betrag bei der Synagoge Tempelgasse 7: ' || g_eur(m.bal), g_reminder_html(m.id, m.name, m.bal));
    n := n + 1;
  end loop;
  return n;
end $$;
revoke execute on function g_send_reminders(boolean) from public, anon, authenticated;

-- the gabbai's buttons: "send now" and "test e-mail to me"
create or replace function g_send_now(p_token uuid)
returns int language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'gabbai'); return g_send_reminders(false); end $$;

create or replace function g_send_test(p_token uuid, p_to text)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'gabbai');
  if coalesce(p_to,'') !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'ops:email'; end if;
  return g_mail_one(null, lower(trim(p_to)), 'test', 200,
    'TEST – Offener Betrag bei der Synagoge Tempelgasse 7: ' || g_eur(200),
    '<p style="font-family:Arial;color:#b0473b"><b>Dies ist eine Test-E-Mail.</b> So sieht die monatliche Erinnerung aus:</p>'
    || replace(g_reminder_html(-1, 'Moshe Muster', 200), '<table', '<table data-test="1"'));
end $$;

-- log, with the mail service's answer filled in once it has arrived
create or replace function g_mails_list(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'gabbai');
  update g_mails g set status = case when r.status_code between 200 and 299 then 'sent' else 'error' end,
      info = case when r.status_code between 200 and 299 then null else left(coalesce(r.content, r.error_msg, r.status_code::text),300) end
    from net._http_response r where r.id = g.request_id and g.status = 'pending';
  update g_mails set status = 'unknown' where status = 'pending' and at < now() - interval '1 hour';
  return coalesce((select json_agg(row_to_json(x) order by x.at desc) from (
    select g.*, m.name from g_mails g left join g_members m on m.id = g.member_id order by g.at desc limit 300) x), '[]'::json);
end $$;

-- ---------- grants ----------
do $$ declare f text; begin
  foreach f in array array['g_login(text,text)','g_set_pass(uuid,text)','g_has_pass(uuid)','g_members_list(uuid)',
    'g_member_save(uuid,jsonb)','g_member_delete(uuid,bigint)','g_entries_list(uuid,bigint)',
    'g_entry_add(uuid,bigint,text,numeric,text,date)','g_entry_delete(uuid,bigint)','g_settings(uuid)',
    'g_settings_save(uuid,jsonb)','g_send_now(uuid)','g_send_test(uuid,text)','g_mails_list(uuid)'] loop
    execute 'revoke execute on function ' || f || ' from public';
    execute 'grant execute on function ' || f || ' to anon, authenticated';
  end loop;
end $$;

-- ---------- the monthly run: 1st of every month, 08:00 UTC (9:00/10:00 in Vienna) ----------
select cron.unschedule('t7-gabbai-monthly') where exists (select 1 from cron.job where jobname = 't7-gabbai-monthly');
select cron.schedule('t7-gabbai-monthly', '0 8 1 * *', 'select public.g_send_reminders(true)');

notify pgrst, 'reload schema';
select 'ok' as result;
