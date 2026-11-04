-- Tempelgasse 7 — gabbai: thank-you / confirmation e-mail after a payment was recorded.
create or replace function g_confirm_payment(p_token uuid, p_entry bigint)
returns bigint language plpgsql security definer set search_path = public, extensions as $$
declare e g_entries; m g_members; bal numeric; html text;
begin
  perform ops_sess(p_token, 'gabbai');
  select * into e from g_entries where id = p_entry and kind = 'payment';
  if e.id is null then raise exception 'ops:kind'; end if;
  select * into m from g_members where id = e.member_id;
  if m.email is null then raise exception 'ops:noemail'; end if;
  bal := g_balance(m.id);
  html := '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1b2230;max-width:560px">'
    || '<p>Schalom ' || g_esc(m.name) || ',</p>'
    || '<p>vielen Dank! Wir haben deine Zahlung von <b>' || g_eur(e.amount) || '</b> vom ' || to_char(e.on_date,'DD.MM.YYYY')
    || ' erhalten und eingetragen' || case when e.what is not null then ' (' || g_esc(e.what) || ')' else '' end || '.</p>'
    || case when bal > 0 then '<p>Derzeit noch offen: <b>' || g_eur(bal) || '</b>.</p>'
            when bal < 0 then '<p>Damit hast du ein Guthaben von <b>' || g_eur(-bal) || '</b>.</p>'
            else '<p>Damit ist alles beglichen — es ist nichts mehr offen.</p>' end
    || '<p>Tizku leMitzwot und Kol Tuv!<br>Der Gabbai der Synagoge Tempelgasse 7</p>'
    || '<p style="color:#878c94;font-size:12px">Fragen? Antworte einfach auf diese E-Mail.</p></div>';
  return g_mail_one(m.id, m.email, 'confirm', e.amount, 'Zahlung erhalten – Synagoge Tempelgasse 7: ' || g_eur(e.amount), html);
end $$;
revoke execute on function g_confirm_payment(uuid,bigint) from public;
grant execute on function g_confirm_payment(uuid,bigint) to anon, authenticated;
notify pgrst, 'reload schema';
select 'ok' as result;
