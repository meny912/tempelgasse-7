-- Tempelgasse 7 — gabbai: delete a line from the e-mail log; send the reminder to one member only.
create or replace function g_mail_delete(p_token uuid, p_id bigint)
returns void language plpgsql security definer set search_path = public, extensions as $$
begin perform ops_sess(p_token, 'gabbai'); delete from g_mails where id = p_id; end $$;

create or replace function g_send_one(p_token uuid, p_member bigint)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare m g_members; bal numeric;
begin
  perform ops_sess(p_token, 'gabbai');
  select * into m from g_members where id = p_member and active;
  if m.id is null then raise exception 'ops:member'; end if;
  if m.email is null then raise exception 'ops:noemail'; end if;
  bal := g_balance(m.id);
  if bal <= 0 then raise exception 'ops:nobalance'; end if;
  return g_mail_one(m.id, m.email, 'manual', bal,
    'Offener Betrag bei der Synagoge Tempelgasse 7: ' || g_eur(bal), g_reminder_html(m.id, m.name, bal));
end $$;

revoke execute on function g_mail_delete(uuid,bigint) from public;
revoke execute on function g_send_one(uuid,bigint) from public;
grant execute on function g_mail_delete(uuid,bigint) to anon, authenticated;
grant execute on function g_send_one(uuid,bigint) to anon, authenticated;
notify pgrst, 'reload schema';
select 'ok' as result;
