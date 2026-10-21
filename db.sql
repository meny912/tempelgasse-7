-- Tempelgasse 7 — Team-App: complete database setup (its own Supabase project).
-- Paste the whole file into SQL Editor → Run. Safe to run again.
--
-- Design (same as Vienna Stay Team): every ops_* table has RLS ON and NO
-- policies, so nobody can read or write them directly. The app only talks to
-- SECURITY DEFINER functions that check a session token first. Staff get a
-- token from the shared staff password; the admin from the admin username/password.

create extension if not exists pgcrypto with schema extensions;

create table if not exists ops_settings (k text primary key, v text);
create table if not exists ops_sessions (
  token uuid primary key default gen_random_uuid(),
  name text not null, role text not null check (role in ('staff','manager')),
  created_at timestamptz not null default now(), last_seen timestamptz not null default now());
create table if not exists ops_rooms (
  id text primary key default gen_random_uuid()::text, name text not null,
  icon text not null default 'room', sort int not null default 100, active boolean not null default true);
-- photos AND voice recordings (stored compressed, base64)
create table if not exists ops_files (
  id uuid primary key default gen_random_uuid(), mime text not null, data text not null,
  by_name text, at timestamptz not null default now());
create table if not exists ops_items (
  id bigserial primary key, name text not null,
  category text not null default 'other', qty int not null default 0, min_qty int not null default 0,
  active boolean not null default true, sort int not null default 0, created_at timestamptz not null default now());
create table if not exists ops_moves (
  id bigserial primary key, item_id bigint not null references ops_items(id),
  kind text not null check (kind in ('take','break','return','add','adjust')),
  qty int not null, qty_after int, unit_id text, note text, by_name text not null,
  at timestamptz not null default now());
create table if not exists ops_issues (
  id bigserial primary key, unit_id text, category text not null default 'other',
  title text not null, details text, photo_id uuid references ops_files(id),
  status text not null default 'open' check (status in ('open','progress','done')),
  reported_by text not null, reported_at timestamptz not null default now(),
  progress_by text, progress_at timestamptz, progress_note text,
  resolved_by text, resolved_at timestamptz, resolution_note text);
create table if not exists ops_ideas (
  id bigserial primary key, unit_id text, body text, audio_id uuid references ops_files(id), audio_secs int,
  status text not null default 'new' check (status in ('new','planned','done','rejected')),
  by_name text not null, at timestamptz not null default now(),
  status_by text, status_at timestamptz, status_note text, active boolean not null default true);
create table if not exists ops_messages (
  id bigserial primary key, by_name text not null, body text, photo_id uuid references ops_files(id),
  issue_id bigint references ops_issues(id), idea_id bigint references ops_ideas(id), sys text,
  at timestamptz not null default now());

do $$ declare t text; begin
  foreach t in array array['ops_rooms','ops_settings','ops_sessions','ops_files','ops_items','ops_moves','ops_issues','ops_ideas','ops_messages'] loop
    execute format('alter table %I enable row level security', t);
    execute format('revoke all on %I from anon, authenticated', t);
  end loop;
end $$;

-- ---------- helper (not callable from the app) ----------
create or replace function ops_sess(p_token uuid, p_need text default 'staff')
returns ops_sessions language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions;
begin
  select * into s from ops_sessions where token = p_token and last_seen > now() - interval '90 days';
  if s.token is null then raise exception 'ops:auth'; end if;
  if p_need = 'manager' and s.role <> 'manager' then raise exception 'ops:forbidden'; end if;
  if s.last_seen < now() - interval '1 hour' then update ops_sessions set last_seen = now() where token = p_token; end if;
  return s;
end $$;

-- ---------- sign in ----------
create or replace function ops_staff_login(p_name text, p_pass text)
returns uuid language plpgsql security definer set search_path = public, extensions as $$
declare h text; t uuid;
begin
  if coalesce(trim(p_name),'') = '' then raise exception 'ops:name'; end if;
  select v into h from ops_settings where k = 'staff_pass';
  if h is null then raise exception 'ops:nopass'; end if;
  if crypt(coalesce(p_pass,''), h) <> h then perform pg_sleep(1.5); raise exception 'ops:badpass'; end if;
  insert into ops_sessions(name, role) values (left(trim(p_name), 40), 'staff') returning token into t;
  return t;
end $$;

create or replace function ops_status()
returns json language sql security definer set search_path = public, extensions as $$
  select json_build_object('has_manager', exists(select 1 from ops_settings where k='mgr_pass')); $$;

-- First run only: creates the admin login while none exists yet; closed after that.
create or replace function ops_manager_setup(p_user text, p_pass text, p_name text)
returns uuid language plpgsql security definer set search_path = public, extensions as $$
declare t uuid;
begin
  perform pg_advisory_xact_lock(4711);
  if exists(select 1 from ops_settings where k='mgr_pass') then raise exception 'ops:hasmgr'; end if;
  if length(trim(coalesce(p_user,''))) < 3 then raise exception 'ops:name'; end if;
  if length(coalesce(p_pass,'')) < 4 then raise exception 'ops:short8'; end if;
  insert into ops_settings(k, v) values ('mgr_user', lower(trim(p_user)));
  insert into ops_settings(k, v) values ('mgr_pass', crypt(p_pass, gen_salt('bf')));
  insert into ops_sessions(name, role) values (coalesce(nullif(left(trim(p_name),40),''),'Admin'), 'manager') returning token into t;
  return t;
end $$;

create or replace function ops_manager_pass_login(p_user text, p_pass text, p_name text)
returns uuid language plpgsql security definer set search_path = public, extensions as $$
declare u text; h text; t uuid;
begin
  select v into u from ops_settings where k = 'mgr_user';
  select v into h from ops_settings where k = 'mgr_pass';
  if u is null or h is null then raise exception 'ops:nomgr'; end if;
  if lower(trim(coalesce(p_user,''))) <> u or crypt(coalesce(p_pass,''), h) <> h then
    perform pg_sleep(1.5); raise exception 'ops:badpass';
  end if;
  insert into ops_sessions(name, role) values (coalesce(nullif(left(trim(p_name),40),''),'Admin'), 'manager') returning token into t;
  return t;
end $$;

create or replace function ops_set_manager_login(p_token uuid, p_user text, p_pass text)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'manager');
  if length(trim(coalesce(p_user,''))) < 3 then raise exception 'ops:name'; end if;
  if length(coalesce(p_pass,'')) < 4 then raise exception 'ops:short8'; end if;
  insert into ops_settings(k, v) values ('mgr_user', lower(trim(p_user))) on conflict (k) do update set v = excluded.v;
  insert into ops_settings(k, v) values ('mgr_pass', crypt(p_pass, gen_salt('bf'))) on conflict (k) do update set v = excluded.v;
end $$;

create or replace function ops_me(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token);
begin return json_build_object('name', s.name, 'role', s.role,
  'has_pass', exists(select 1 from ops_settings where k='staff_pass'),
  'mgr_user', case when s.role='manager' then (select v from ops_settings where k='mgr_user') end); end $$;

create or replace function ops_logout(p_token uuid)
returns void language sql security definer set search_path = public, extensions as $$
  delete from ops_sessions where token = p_token; $$;

create or replace function ops_set_staff_pass(p_token uuid, p_pass text, p_kick boolean default false)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token, 'manager');
  if length(coalesce(p_pass,'')) < 4 then raise exception 'ops:short'; end if;
  insert into ops_settings(k, v) values ('staff_pass', crypt(p_pass, gen_salt('bf')))
    on conflict (k) do update set v = excluded.v;
  if p_kick then delete from ops_sessions where role = 'staff'; end if;
end $$;

-- ---------- rooms (Räume) — the admin edits this list in the app ----------
create or replace function ops_units(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_agg(json_build_object('id',u.id,'name',u.name,'icon',u.icon,'sort',u.sort,
     'open_issues',(select count(*) from ops_issues i where i.unit_id=u.id and i.status<>'done'))
     order by u.sort, u.name) from ops_rooms u where u.active), '[]'::json);
end $$;

create or replace function ops_room_save(p_token uuid, p_id text, p_name text, p_icon text, p_sort int)
returns text language plpgsql security definer set search_path = public, extensions as $$
declare nid text;
begin
  perform ops_sess(p_token, 'manager');
  if coalesce(trim(p_name),'') = '' then raise exception 'ops:title'; end if;
  if coalesce(p_id,'') = '' then
    insert into ops_rooms(name, icon, sort) values (left(trim(p_name),80), coalesce(nullif(p_icon,''),'room'),
      coalesce(p_sort,(select coalesce(max(sort),0)+10 from ops_rooms))) returning id into nid;
    return nid;
  end if;
  update ops_rooms set name=left(trim(p_name),80), icon=coalesce(nullif(p_icon,''),icon), sort=coalesce(p_sort,sort) where id=p_id;
  return p_id;
end $$;

-- Soft delete: the room disappears from lists, old reports keep its name.
create or replace function ops_room_delete(p_token uuid, p_id text)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'manager'); update ops_rooms set active = false where id = p_id; end $$;

-- ---------- storage (Lager) ----------
create or replace function ops_items(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_agg(row_to_json(i) order by i.category, i.sort, i.id) from (
    select it.*, (select coalesce(sum(m.qty),0) from ops_moves m where m.item_id=it.id and m.kind='break'
                   and m.at > now() - interval '30 days') as broken_30d
    from ops_items it where it.active) i), '[]'::json);
end $$;

create or replace function ops_item_save(p_token uuid, p jsonb)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token, 'manager'); nid bigint; old int;
begin
  if coalesce(trim(p->>'name'),'') = '' then raise exception 'ops:title'; end if;
  if coalesce(p->>'id','') = '' then
    insert into ops_items(name,category,qty,min_qty)
    values (left(trim(p->>'name'),120),coalesce(p->>'category','other'),
            coalesce((p->>'qty')::int,0),coalesce((p->>'min_qty')::int,0)) returning id into nid;
    insert into ops_moves(item_id,kind,qty,qty_after,by_name,note) values (nid,'adjust',coalesce((p->>'qty')::int,0),coalesce((p->>'qty')::int,0),s.name,'neuer Artikel');
    return nid;
  end if;
  nid := (p->>'id')::bigint;
  select qty into old from ops_items where id = nid for update;
  update ops_items set name=left(trim(p->>'name'),120),
    category=coalesce(p->>'category',category), min_qty=coalesce((p->>'min_qty')::int,min_qty),
    qty=coalesce((p->>'qty')::int,qty) where id = nid;
  if (p->>'qty') is not null and (p->>'qty')::int <> old then
    insert into ops_moves(item_id,kind,qty,qty_after,by_name,note) values (nid,'adjust',(p->>'qty')::int - old,(p->>'qty')::int,s.name,'Bestand korrigiert');
  end if;
  return nid;
end $$;

create or replace function ops_item_delete(p_token uuid, p_id bigint)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'manager'); update ops_items set active = false where id = p_id; end $$;

-- take = out of storage, return = back in, break = broken/used up (logged, stock unchanged),
-- add = purchase arrived (admin).
create or replace function ops_move(p_token uuid, p_item bigint, p_kind text, p_qty int, p_unit text, p_note text)
returns int language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); q int;
begin
  if p_kind not in ('take','break','return','add') then raise exception 'ops:kind'; end if;
  if p_kind = 'add' and s.role <> 'manager' then raise exception 'ops:forbidden'; end if;
  if coalesce(p_qty,0) <= 0 or p_qty > 10000 then raise exception 'ops:qty'; end if;
  select qty into q from ops_items where id = p_item and active for update;
  if q is null then raise exception 'ops:item'; end if;
  q := q + case p_kind when 'take' then -p_qty when 'break' then 0 else p_qty end;
  if q < 0 then raise exception 'ops:notenough'; end if;
  update ops_items set qty = q where id = p_item;
  insert into ops_moves(item_id,kind,qty,qty_after,unit_id,note,by_name)
    values (p_item,p_kind,p_qty,q,nullif(p_unit,''),nullif(left(p_note,500),''),s.name);
  return q;
end $$;

create or replace function ops_moves_list(p_token uuid, p_from date, p_to date)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_agg(row_to_json(m) order by m.at desc) from (
    select m.*, u.name as unit_name from ops_moves m left join ops_rooms u on u.id = m.unit_id
    where m.at >= p_from and m.at < p_to + 1 order by m.at desc limit 2000) m), '[]'::json);
end $$;

-- ---------- files: photos (~150 KB) and voice notes (~0.5 MB for 2 min) ----------
create or replace function ops_photo_put(p_token uuid, p_mime text, p_data text)
returns uuid language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); nid uuid;
begin
  if split_part(p_mime,';',1) not in ('image/jpeg','image/png','image/webp','audio/webm','audio/mp4','audio/ogg','audio/mpeg','audio/aac','audio/wav')
    then raise exception 'ops:mime'; end if;
  if length(p_data) > 3500000 then raise exception 'ops:big'; end if;
  insert into ops_files(mime,data,by_name) values (p_mime,p_data,s.name) returning id into nid;
  return nid;
end $$;

create or replace function ops_photo_get(p_token uuid, p_id uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token);
  return (select json_build_object('mime',mime,'data',data) from ops_files where id = p_id); end $$;

-- ---------- issues (Meldungen) ----------
create or replace function ops_issue_new(p_token uuid, p_unit text, p_cat text, p_title text, p_details text, p_photo uuid)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); nid bigint;
begin
  if coalesce(trim(p_title),'') = '' then raise exception 'ops:title'; end if;
  insert into ops_issues(unit_id,category,title,details,photo_id,reported_by)
    values (nullif(p_unit,''),coalesce(p_cat,'other'),left(trim(p_title),200),nullif(left(p_details,2000),''),p_photo,s.name)
    returning id into nid;
  insert into ops_messages(by_name,body,photo_id,issue_id,sys) values (s.name,left(trim(p_title),200),p_photo,nid,'issue_new');
  return nid;
end $$;

create or replace function ops_issue_progress(p_token uuid, p_id bigint, p_note text)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); t text;
begin
  update ops_issues set status='progress', progress_by=s.name, progress_at=now(), progress_note=nullif(left(p_note,1000),'')
    where id = p_id and status = 'open' returning title into t;
  if t is not null then insert into ops_messages(by_name,body,issue_id,sys) values (s.name,t,p_id,'issue_progress'); end if;
end $$;

create or replace function ops_issue_set(p_token uuid, p_id bigint, p_done boolean, p_note text)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); t text;
begin
  if p_done then
    update ops_issues set status='done', resolved_by=s.name, resolved_at=now(), resolution_note=nullif(left(p_note,1000),'')
      where id = p_id and status in ('open','progress') returning title into t;
    if t is not null then insert into ops_messages(by_name,body,issue_id,sys) values (s.name,t,p_id,'issue_done'); end if;
  else
    update ops_issues set status='open', resolved_by=null, resolved_at=null, resolution_note=null,
      progress_by=null, progress_at=null, progress_note=null
      where id = p_id and status in ('progress','done') returning title into t;
    if t is not null then insert into ops_messages(by_name,body,issue_id,sys) values (s.name,t,p_id,'issue_reopen'); end if;
  end if;
end $$;

create or replace function ops_issues_list(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_agg(row_to_json(i) order by
      case i.status when 'progress' then 0 when 'open' then 1 else 2 end, i.reported_at desc) from (
    select i.*, u.name as unit_name from ops_issues i left join ops_rooms u on u.id = i.unit_id
    where i.status <> 'done' or i.reported_at > now() - interval '365 days') i), '[]'::json);
end $$;

-- ---------- ideas (Ideen) — written or as a voice note ----------
create or replace function ops_idea_new(p_token uuid, p_unit text, p_body text, p_audio uuid, p_secs int)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); nid bigint;
begin
  if coalesce(trim(p_body),'') = '' and p_audio is null then raise exception 'ops:empty'; end if;
  insert into ops_ideas(unit_id,body,audio_id,audio_secs,by_name)
    values (nullif(p_unit,''),nullif(left(trim(p_body),4000),''),p_audio,p_secs,s.name) returning id into nid;
  insert into ops_messages(by_name,body,idea_id,sys) values (s.name,coalesce(nullif(left(trim(p_body),200),''),'Sprachnachricht'),nid,'idea_new');
  return nid;
end $$;

create or replace function ops_idea_set(p_token uuid, p_id bigint, p_status text, p_note text)
returns void language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token, 'manager');
begin
  if p_status not in ('new','planned','done','rejected') then raise exception 'ops:kind'; end if;
  update ops_ideas set status=p_status, status_by=s.name, status_at=now(), status_note=nullif(left(p_note,1000),'') where id = p_id;
end $$;

create or replace function ops_idea_delete(p_token uuid, p_id bigint)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'manager'); update ops_ideas set active = false where id = p_id; end $$;

create or replace function ops_ideas_list(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_agg(row_to_json(i) order by i.at desc) from (
    select i.*, u.name as unit_name from ops_ideas i left join ops_rooms u on u.id = i.unit_id
    where i.active order by i.at desc limit 1000) i), '[]'::json);
end $$;

-- ---------- group chat ----------
create or replace function ops_msg_send(p_token uuid, p_body text, p_photo uuid)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare s ops_sessions := ops_sess(p_token); nid bigint;
begin
  if coalesce(trim(p_body),'') = '' and p_photo is null then raise exception 'ops:empty'; end if;
  insert into ops_messages(by_name,body,photo_id) values (s.name,nullif(left(trim(p_body),4000),''),p_photo) returning id into nid;
  return nid;
end $$;

create or replace function ops_msgs(p_token uuid, p_after bigint)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_agg(row_to_json(m) order by m.id) from (
    select * from ops_messages where id > coalesce(p_after,0) order by id desc limit 300) m), '[]'::json);
end $$;

-- ---------- live sync: a change counter per area, polled every few seconds ----------
create table if not exists ops_rev (area text primary key, n bigint not null default 0);
alter table ops_rev enable row level security;
revoke all on ops_rev from anon, authenticated;

create or replace function ops_bump() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
begin
  insert into ops_rev(area, n) values (tg_argv[0], 1) on conflict (area) do update set n = ops_rev.n + 1;
  return null;
end $$;

do $$ declare r record; begin
  for r in select * from (values ('ops_items','items'),('ops_moves','items'),('ops_issues','issues'),
                                 ('ops_messages','msgs'),('ops_rooms','units'),('ops_ideas','ideas')) v(t,a) loop
    execute format('drop trigger if exists ops_rev_bump on %I', r.t);
    execute format('create trigger ops_rev_bump after insert or update or delete on %I for each statement execute function ops_bump(%L)', r.t, r.a);
  end loop;
end $$;

create or replace function ops_rev(p_token uuid)
returns json language plpgsql security definer set search_path = public, extensions as $$
begin
  perform ops_sess(p_token);
  return coalesce((select json_object_agg(area, n) from ops_rev), '{}'::json);
end $$;

-- ---------- grants: the app may call only these ----------
revoke execute on function ops_sess(uuid,text) from public, anon, authenticated;
revoke execute on function ops_bump() from public, anon, authenticated;
do $$ declare f text; begin
  foreach f in array array[
    'ops_staff_login(text,text)','ops_status()','ops_manager_setup(text,text,text)','ops_manager_pass_login(text,text,text)',
    'ops_set_manager_login(uuid,text,text)','ops_me(uuid)','ops_logout(uuid)','ops_set_staff_pass(uuid,text,boolean)',
    'ops_units(uuid)','ops_room_save(uuid,text,text,text,int)','ops_room_delete(uuid,text)',
    'ops_items(uuid)','ops_item_save(uuid,jsonb)','ops_item_delete(uuid,bigint)','ops_move(uuid,bigint,text,int,text,text)',
    'ops_moves_list(uuid,date,date)','ops_photo_put(uuid,text,text)','ops_photo_get(uuid,uuid)',
    'ops_issue_new(uuid,text,text,text,text,uuid)','ops_issue_progress(uuid,bigint,text)','ops_issue_set(uuid,bigint,boolean,text)',
    'ops_issues_list(uuid)','ops_idea_new(uuid,text,text,uuid,int)','ops_idea_set(uuid,bigint,text,text)',
    'ops_idea_delete(uuid,bigint)','ops_ideas_list(uuid)','ops_msg_send(uuid,text,uuid)','ops_msgs(uuid,bigint)','ops_rev(uuid)'] loop
    execute 'revoke execute on function ' || f || ' from public';
    execute 'grant execute on function ' || f || ' to anon, authenticated';
  end loop;
end $$;

-- ---------- starter rooms (only if empty) — the admin can change them in the app ----------
insert into ops_rooms(id,name,icon,sort)
select * from (values
 ('synagoge','Synagoge (Beit Knesset)','synagogue',10),
 ('beit-midrasch','Beit Midrasch','book',20),
 ('frauen','Frauenabteilung (Ezrat Nashim)','users',30),
 ('wc-herren','WC Herren','wc',40),
 ('wc-damen','WC Damen','wc',50),
 ('kueche','Küche','cup',60),
 ('eingang','Eingang / Stiegenhaus','door',70),
 ('mikwe','Mikwe','droplet',80),
 ('buero','Büro','briefcase',90)
) v where not exists (select 1 from ops_rooms);

-- ---------- starter storage list (only if empty) ----------
insert into ops_items(name,category,qty,min_qty,sort)
select * from (values
 ('Siddurim','sefarim',0,30,1),
 ('Chumaschim','sefarim',0,20,2),
 ('Tehillim','sefarim',0,20,3),
 ('Machsorim','sefarim',0,20,4),
 ('Kippot','sefarim',0,30,5),
 ('Kerzen / Jahrzeitkerzen','kiddush',0,20,10),
 ('Wein / Traubensaft','kiddush',0,6,11),
 ('Einwegbecher','kiddush',0,200,12),
 ('Einwegteller','kiddush',0,200,13),
 ('Servietten','kiddush',0,200,14),
 ('Toilettenpapier','hygiene',0,48,20),
 ('Papierhandtücher','hygiene',0,20,21),
 ('Handseife','hygiene',0,10,22),
 ('Müllsäcke','hygiene',0,50,23),
 ('Allzweckreiniger','cleaning',0,5,30),
 ('Bodenreiniger','cleaning',0,5,31),
 ('Schwämme / Tücher','cleaning',0,20,32),
 ('Glühbirnen','other',0,10,40),
 ('Batterien','other',0,10,41)
) v where not exists (select 1 from ops_items);

notify pgrst, 'reload schema';
