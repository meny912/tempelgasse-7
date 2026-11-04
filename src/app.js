'use strict';
/* Tempelgasse 7 — its OWN Supabase project, separate from every other system. */
const SB='https://vlopyngsxljvitgkarnd.supabase.co';
const KEY='sb_publishable_HoReQXimZM4tfyVz93BPpg_pLdspg_D';

/* ---------------- Texte (nur Deutsch) ---------------- */
const T={
 app:'Tempelgasse 7',staff:'Team',manager:'Admin',yourName:'Dein Vorname',password:'Passwort',code:'Code',teamCode:'Team-Code',adminCode:'Admin-Code',repeatCode:'Code wiederholen',newCode:'Neuer Code',username:'Benutzername',login:'Anmelden',logout:'Abmelden',
 firstMgr:'Erster Start: Lege hier den Admin-Code fest (mind. 4 Zeichen).',repeatPass:'Passwort wiederholen',mismatch:'Die Codes stimmen nicht überein',
 createMgr:'Admin anlegen & anmelden',hasMgr:'Es gibt schon einen Admin — bitte anmelden',noMgr:'Noch kein Admin angelegt',
 mgrLogin:'Admin-Code',short8:'Code zu kurz (mind. 4 Zeichen)',short:'Code zu kurz (mind. 4 Zeichen)',displayName:'Angezeigter Name',
 chat:'Chat',issues:'Meldungen',ideas:'Ideen',stock:'Lager',units:'Räume',reports:'Berichte',settings:'Mehr',
 typeMsg:'Nachricht schreiben…',camera:'Kamera',gallery:'Galerie',send:'Senden',noMsgs:'Noch keine Nachrichten.',
 newIssue:'Problem melden',open:'Offen',progress:'In Arbeit',done:'Erledigt',all:'Alle',room:'Raum',noRoom:'— Allgemein / kein bestimmter Raum —',topic:'Thema',
 stOpen:'Offen',stProgress:'In Bearbeitung',stDone:'Erledigt',
 whatHappened:'Was ist das Problem? (kurz)',details:'Weitere Details',report:'Melden',reportedBy:'Gemeldet von',reportedAt:'Gemeldet',
 handledAt:'Erledigt',handledBy:'Erledigt von',markDone:'Als erledigt markieren',reopen:'Wieder öffnen',handleNote:'Was wurde gemacht? (optional)',
 markProgress:'Als „in Bearbeitung“ markieren',progressNote:'Was ist geplant? (optional)',progressAt:'In Bearbeitung seit',progressBy:'Bearbeitet von',
 took:'Dauer',noIssues:'Keine Meldungen',
 issueNew:'Neue Meldung',issueDone:'Meldung erledigt',issueReopen:'Meldung wieder offen',issueProgress:'Meldung in Bearbeitung',ideaNew:'Neue Idee',
 newIdea:'Neue Idee',ideaText:'Deine Idee',ideaPh:'Was könnte man besser machen?',voice:'Sprachnachricht',record:'Aufnehmen',stopRec:'Aufnahme beenden',
 recording:'Aufnahme läuft…',rerecord:'Neu aufnehmen',micErr:'Mikrofon nicht verfügbar. Bitte den Zugriff auf das Mikrofon erlauben.',
 ideaEmpty:'Bitte schreib etwas oder nimm eine Sprachnachricht auf.',noIdeas:'Noch keine Ideen',
 idNew:'Neu',idPlanned:'In Planung',idDone:'Umgesetzt',idRejected:'Verworfen',ideaStatus:'Status',ideaNote:'Antwort / Notiz (optional)',
 submittedBy:'Eingereicht von',statusBy:'Status gesetzt von',delIdeaQ:'Diese Idee löschen?',loadAudio:'Abspielen',
 take:'Genommen',ret:'Zurück',brk:'Kaputt / verbraucht',add:'Eingekauft',amount:'Menge',forRoom:'Für welchen Raum?',note:'Notiz',save:'Speichern',cancel:'Abbrechen',
 inStock:'Im Lager',min:'Minimum',shopping:'Einkaufsliste',buy:'Kaufen',search:'Suchen…',newItem:'Neuer Artikel',name:'Name',
 editItem:'Artikel bearbeiten',del:'Löschen',delQ:'Artikel löschen? Der Verlauf bleibt in den Berichten.',category:'Kategorie',
 notEnough:'Nicht genug im Lager',saved:'Gespeichert',nothingToBuy:'Alles vorrätig',
 openIssues:'Offene Meldungen',reportHere:'Problem in diesem Raum melden',noUnits:'Keine Räume',history:'Verlauf',
 newRoom:'Raum hinzufügen',editRoom:'Raum bearbeiten',roomName:'Name des Raums',icon:'Symbol',order:'Reihenfolge (kleine Zahl = oben)',
 delRoomQ:'Raum entfernen? Alte Meldungen behalten den Namen.',
 from:'Von',to:'Bis',taken:'Genommen',returned:'Zurück',broken:'Kaputt',added:'Eingekauft',item:'Artikel',
 csv:'Für Excel herunterladen (CSV)',avgFix:'Ø Bearbeitungszeit',issuesOpen:'Offene Meldungen',issuesDone:'Erledigt im Zeitraum',moves:'Lagerbewegungen',ideasNew:'Neue Ideen',
 staffPass:'Team-Code',staffPassHint:'Ein Code für das ganze Team. Jeder gibt beim Anmelden seinen eigenen Namen ein.',newPass:'Neuer Code',
 kick:'Alle Team-Mitglieder abmelden',setPass:'Code speichern',noPassYet:'Noch kein Team-Code gesetzt — bitte hier festlegen, damit sich das Team anmelden kann.',
 install:'Auf dem Handy installieren',installHint:'iPhone: Safari → Teilen → „Zum Home-Bildschirm“. Android: Chrome → ⋮ → „Zum Startbildschirm hinzufügen“.',
 wrong:'Falscher Code',needName:'Bitte deinen Vornamen eingeben',noPass:'Der Admin hat noch keinen Team-Code gesetzt',netErr:'Keine Verbindung. Bitte erneut versuchen.',forbidden:'Keine Berechtigung',gabbai:'Gabbai',gabbaiCode:'Gabbai-Code',members:'Mitglieder',mails:'E-Mails',noGabbai:'Der Admin hat noch keinen Gabbai-Code gesetzt',
 gabbaiPass:'Gabbai-Code',gabbaiHint:'Nur mit diesem Code sieht man die Mitgliederliste und die offenen Beträge. Team und Admin sehen sie nicht.',gabbaiSet:'Gabbai-Code ist gesetzt',gabbaiNotSet:'Noch kein Gabbai-Code gesetzt',
 newMember:'Neues Mitglied',editMember:'Mitglied bearbeiten',email:'E-Mail',phone:'Telefon',memberNote:'Notiz',delMemberQ:'Mitglied entfernen? Die Einträge bleiben gespeichert.',noMembers:'Noch keine Mitglieder',
 open2:'Offen',allMembers:'Alle',totalOpen:'Insgesamt offen',balance:'Offen',credit:'Guthaben',settled:'Ausgeglichen',noEmail:'keine E-Mail',
 addCharge:'Betrag eintragen',addPayment:'Zahlung eintragen',charge:'Betrag',payment:'Zahlung',what:'Wofür? (z. B. Alija, Kiddusch)',payWhat:'Notiz (z. B. Überweisung, bar)',date:'Datum',
 history2:'Verlauf',noEntries:'Noch keine Einträge',delEntryQ:'Diesen Eintrag löschen?',badEmail:'Ungültige E-Mail-Adresse',badAmount:'Bitte einen Betrag eingeben',
 mailLog:'Gesendete E-Mails',noMails:'Noch keine E-Mails gesendet',sendNow:'Jetzt Erinnerungen senden',sendNowQ:'Jetzt an alle mit offenem Betrag und E-Mail senden',sentN:'E-Mails werden gesendet',
 nobodyOpen:'Niemand mit offenem Betrag und E-Mail-Adresse',autoInfo:'Automatisch am 1. jedes Monats um ca. 9 Uhr — nur an Mitglieder mit offenem Betrag. Wer nichts offen hat, bekommt keine E-Mail.',
 mailSettings:'E-Mail-Versand',fromName:'Absender-Name',fromEmail:'Absender-E-Mail (bei Brevo bestätigt)',payInfo:'Zahlungsinfo im E-Mail (z. B. IBAN)',monthlyOn:'Monatliche Erinnerung aktiv',
 provider:'Mail-Dienst',keyOk:'API-Schlüssel ist hinterlegt',keyMissing:'API-Schlüssel fehlt noch (wird einmalig in Supabase → Vault als „mail_api_key“ eingetragen)',
 testMail:'Test-E-Mail senden an',sendTest:'Test senden',testSent:'Test-E-Mail wird gesendet',noKey:'Der Mail-Dienst ist noch nicht eingerichtet (API-Schlüssel fehlt)',noFrom:'Bitte zuerst die Absender-E-Mail eintragen',
 stSent:'Gesendet',stPending:'Wird gesendet',stError:'Fehler',stUnknown:'Unklar',kMonthly:'Monatlich',kManual:'Manuell',kTest:'Test',lastMail:'Letzte E-Mail',sendOne:'Erinnerung per E-Mail senden',confirmMail:'Bestätigung per E-Mail an das Mitglied senden',kConfirm:'Zahlungsbestätigung',confirmSent:'Gespeichert — Bestätigung wird gesendet',sendOneQ:'Erinnerung jetzt an diese Adresse senden',mailSent:'E-Mail wird gesendet',delMailQ:'Diesen Eintrag aus der Liste löschen?',noEmailErr:'Dieses Mitglied hat keine E-Mail-Adresse',noBalance:'Nichts offen — keine Erinnerung nötig',locked:'Zu viele falsche Versuche. Bitte 15 Minuten warten.',
 view:'Öffnen',today:'Heute',yesterday:'Gestern',sending:'Wird gesendet…',photo:'Foto',
 kinds:{take:'nahm',break:'meldete kaputt/verbraucht:',return:'brachte zurück',add:'kaufte ein',adjust:'korrigierte'},
 icat:{sefarim:'Sefarim & Kippot',kiddush:'Kiddusch & Kerzen',hygiene:'WC & Hygiene',cleaning:'Reinigung',other:'Sonstiges'},
 pcat:{plumbing:'Sanitär / Wasser',electric:'Strom & Licht',heating:'Heizung / Lüftung',furniture:'Bänke, Tische & Möbel',sefarim:'Sefarim & Siddurim',
  sacred:'Aron HaKodesch / Bima',sound:'Lautsprecher / Technik',cleaning:'Reinigung',access:'Türen / Schlüssel / Zugang',safety:'Sicherheit',other:'Sonstiges'},
 ricon:{synagogue:'Synagoge',book:'Lernsaal',users:'Personen',wc:'WC',cup:'Küche',door:'Tür / Eingang',droplet:'Wasser',briefcase:'Büro',box:'Lager',room:'Raum'}
};
function t(k){return T[k]??k}
const ICATS=['sefarim','kiddush','hygiene','cleaning','other'];
const PCATS=['plumbing','electric','heating','furniture','sefarim','sacred','sound','cleaning','access','safety','other'];
const PICON={plumbing:'droplet',electric:'zap',heating:'flame',furniture:'chair',sefarim:'book',sacred:'synagogue',sound:'speaker',cleaning:'sparkle',access:'key',safety:'shield',other:'help'};
const ICICON={sefarim:'book',kiddush:'cup',hygiene:'wc',cleaning:'sparkle',other:'box'};
const RICONS=['synagogue','book','users','wc','cup','door','droplet','briefcase','box','room'];
const ISTAT={new:['idNew','grey'],planned:['idPlanned','amber'],done:['idDone','green'],rejected:['idRejected','red']};

/* ---------------- Icons (Linien, 24px) ---------------- */
const IC={
 chat:'M20.5 11.5a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1.4-4.4A8.5 8.5 0 1 1 20.5 11.5z',
 tool:'M14.6 6.4a4.2 4.2 0 0 0-5.5 5.5L3.6 17.4a1.6 1.6 0 0 0 2.3 2.3l5.5-5.5a4.2 4.2 0 0 0 5.5-5.5l-2.6 2.6-2.2-.4-.4-2.2z',
 box:'M20.5 7.8 12 3.3 3.5 7.8v8.4l8.5 4.5 8.5-4.5zM3.5 7.8 12 12.3l8.5-4.5M12 12.3v8.4',
 building:'M4.5 20.5v-15a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15M15.5 9.5h2a2 2 0 0 1 2 2v9M2.5 20.5h19M8 7.5h4M8 11h4M8 14.5h4',
 chart:'M4 20.5v-8M10 20.5v-14M16 20.5v-10M21 20.5H3',
 sliders:'M4 7h9M17 7h3M4 17h3M11 17h9M15 5v4M9 15v4',
 camera:'M3.5 8.5a2 2 0 0 1 2-2h2.2l1.6-2.2h5.4l1.6 2.2h2.2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zM12 9.6a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 1 0 0-7.2',
 image:'M5.5 3.5h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2zM20.5 15l-4.8-4.8L5.5 20.5M9 7.3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 1 0 0-3.4',
 plus:'M12 5v14M5 12h14',minus:'M5 12h14',x:'M6.5 6.5l11 11M17.5 6.5l-11 11',check:'M5 12.5l4.3 4.3L19 7',
 search:'M10.8 4a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 1 0 0-13.6M20 20l-4.4-4.4',
 trash:'M4.5 7h15M10 11v6M14 11v6M6 7l.9 12.2a1.5 1.5 0 0 0 1.5 1.3h7.2a1.5 1.5 0 0 0 1.5-1.3L18 7M9.5 7V4.5h5V7',
 edit:'M4 20h3.8L19 8.8a2.1 2.1 0 0 0-3-3L4.8 17z',
 up:'M12 15.5V4M7.5 8.5 12 4l4.5 4.5M5 20h14',down:'M12 4v11.5M7.5 11 12 15.5l4.5-4.5M5 20h14',
 crack:'M7.5 3.5h9l-.8 6.2a3.7 3.7 0 0 1-7.4 0zM12 13.5v7M9 20.5h6M11 3.5l1.6 2.6-1.5 1.8 1.2 1.6',
 cart:'M3 4h2.2l2.2 10.5a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.4-1.1L20.5 8H6.1M9.5 19.5a.9.9 0 1 0 0 .1M17 19.5a.9.9 0 1 0 0 .1',
 key:'M15 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 1 0 0-11M11 13 3.5 20.5M6.5 17.5l2 2M9 15l2 2M15 7.5h.01',
 droplet:'M12 3.5s6 6.4 6 10.8a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z',
 zap:'M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z',
 flame:'M12 21.5a6.5 6.5 0 0 0 6.5-6.5c0-3.8-2.8-6-3.8-10-1.8 1.7-2.7 3.6-2.7 5.4-1-.8-1.8-1.9-2-3.6C8 8.8 5.5 11.6 5.5 15a6.5 6.5 0 0 0 6.5 6.5z',
 chair:'M6 11V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M4 11a2 2 0 0 1 2 2v1.5h12V13a2 2 0 1 1 3 1.7V18H3v-3.3A2 2 0 0 1 4 11zM5 18v2.5M19 18v2.5',
 sparkle:'M11 3.5l1.7 4.8 4.8 1.7-4.8 1.7L11 16.5l-1.7-4.8L4.5 10l4.8-1.7zM18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z',
 help:'M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 1 0 0-19M9.3 9.2a2.8 2.8 0 0 1 5.4 1c0 1.9-2.7 2.5-2.7 4M12 17.3h.01',
 user:'M12 3.5a4 4 0 1 0 0 8 4 4 0 1 0 0-8M4.5 20.5a7.5 7.5 0 0 1 15 0',
 clock:'M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 1 0 0-19M12 7v5l3.2 2',
 lock:'M5.5 11h13v9.5h-13zM8.5 11V7.5a3.5 3.5 0 0 1 7 0V11',
 phone:'M7.5 2.5h9a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2zM11 18h2',
 logout:'M14.5 3.5h4a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4M10 16.5 5.5 12 10 7.5M5.5 12h10',
 undo:'M9 14 4.5 9.5 9 5M4.5 9.5h10a5.5 5.5 0 0 1 0 11h-3',
 list:'M8.5 6h12M8.5 12h12M8.5 18h12M4 6h.01M4 12h.01M4 18h.01',
 download:'M12 3.5v11.5M7.5 10.5 12 15l4.5-4.5M4.5 20.5h15',
 chev:'M9.5 6l6 6-6 6',
 briefcase:'M4.5 7.5h15a1.5 1.5 0 0 1 1.5 1.5v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5V9a1.5 1.5 0 0 1 1.5-1.5zM9 7.5V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3 12.5h18M12 11.5v2',
 cup:'M5 5.5h11v6a5.5 5.5 0 0 1-11 0zM16 7.5h1.5a2.5 2.5 0 0 1 0 5H16M5 20.5h11',
 alert:'M12 3.5 2.5 20h19zM12 10v4.5M12 17.3h.01',
 refresh:'M20 11.5A8 8 0 1 0 17.6 17M20 4.5v7h-7',
 synagogue:'M3.5 20.5V10l8.5-6 8.5 6v10.5M2 20.5h20M9.5 20.5v-4.5a2.5 2.5 0 0 1 5 0v4.5M12 7.6l2 3.4h-4zM12 12.4l-2-3.4h4z',
 book:'M4.5 5.5a2 2 0 0 1 2-2h12.5v14H6.5a2 2 0 0 0-2 2zM4.5 19.5a2 2 0 0 0 2 2H19v-4M8.5 7.5h6.5',
 users:'M9 3.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 0 0-7M2.5 20.5a6.5 6.5 0 0 1 13 0M16 4.2a3.4 3.4 0 0 1 0 6.4M18 14a6.4 6.4 0 0 1 3.5 6.5',
 wc:'M7 3.2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 1 0 0-3.4M17 3.2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 1 0 0-3.4M5 9.5h4l.4 6H8.5v5h-3v-5h-.9zM14.8 9.5h4.4l1.6 7h-2.1v4h-3.4v-4h-2.1zM12 3v18',
 door:'M5.5 20.5v-16a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v16M3 20.5h18M15 12.5h.01',
 room:'M3.5 4.5h17v16h-17zM3.5 14h7v6.5',
 mic:'M12 3a3 3 0 0 0-3 3v5.5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7',
 bulb:'M9.2 18h5.6M10 21h4M12 3a6 6 0 0 0-3.8 10.6c.6.5 1 1.3 1 2.1v.3h5.6v-.3c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z',
 shield:'M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z',
 speaker:'M4 9.5h3.5L12 5.5v13l-4.5-4H4zM16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11',
 mail:'M3.5 6h17v12h-17zM3.5 6.5l8.5 6.5 8.5-6.5',
 euro:'M17.5 6.5a6.5 6.5 0 1 0 0 11M4.5 10.5h9M4.5 13.5h9',
 eye:'M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12zM12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6',
 eyeoff:'M3.5 3.5l17 17M10 5.7c.6-.1 1.3-.2 2-.2 6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-2.8 3.6M6.4 6.9C3.9 8.6 2.5 12 2.5 12s3.5 6.5 9.5 6.5c1.7 0 3.2-.5 4.5-1.2M9.9 9.9a3 3 0 0 0 4.2 4.2'
};
function ic(n,c){return `<svg class="ic ${c||''}" viewBox="0 0 24 24" aria-hidden="true"><path d="${IC[n]||IC.help}"/></svg>`}
const SEND_SVG='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6v6.5L15 12 3.4 13.9z"/></svg>';
const TICKS='<svg viewBox="0 0 16 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l3 3 6.5-7.5M7.5 8.5l.7.6L14.5 1.5"/></svg>';
const GROUP_AV='<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#dfe5e7"/><circle cx="15.5" cy="16" r="5" fill="#fff"/><path d="M6.5 32c0-5.5 4-9 9-9s9 3.5 9 9z" fill="#fff"/><circle cx="26" cy="15" r="4.2" fill="#fff" opacity=".85"/><path d="M22 23.5c1.2-.4 2.5-.6 4-.6 4.4 0 7.5 3.2 7.5 8.1h-7.8" fill="#fff" opacity=".85"/></svg>';
const NAMECOL=['#1f7a4d','#c2337a','#0a6fa8','#d2602a','#7c4fc4','#a8452a','#0b8a73','#a9821b','#5b6bd1','#b4386a'];
function nameColor(n){let h=0;for(const c of String(n))h=(h*31+c.charCodeAt(0))>>>0;return NAMECOL[h%NAMECOL.length]}

/* ---------------- Zustand ---------------- */
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(e){return null}}
const S={token:ls('t7_token'),me:null,tab:ls('t7_tab')||'chat',
 loginMode:'staff',err:'',busy:false,units:[],items:[],issues:[],ideas:[],msgs:[],lastMsg:0,seenMsg:+(ls('t7_seen')||0),
 issueFilter:'open',issueApt:'',ideaFilter:'new',stockQ:'',stockShop:false,pending:null,photos:{},
 gm:[],gMails:null,gSet:null,gQ:'',gOpen:true,rFrom:monthStart(),rTo:isoDay(new Date()),rMoves:null};
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function isoDay(d){const z=new Date(d.getTime()-d.getTimezoneOffset()*6e4);return z.toISOString().slice(0,10)}
function monthStart(){const d=new Date();return isoDay(new Date(d.getFullYear(),d.getMonth(),1))}
function fmt(ts,opt){if(!ts)return'';return new Intl.DateTimeFormat('de-AT',opt||{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(ts))}
function hm(ts){return fmt(ts,{hour:'2-digit',minute:'2-digit'})}
function dur(a,b){let m=Math.max(0,Math.round((new Date(b)-new Date(a))/6e4));if(m<60)return m+' Min.';let h=Math.round(m/6)/10;if(h<48)return String(h).replace('.',',')+' Std.';return String(Math.round(h/24*10)/10).replace('.',',')+' Tage'}
function secs(n){n=Math.max(0,Math.round(n||0));return Math.floor(n/60)+':'+String(n%60).padStart(2,'0')}
function unitById(id){return S.units.find(u=>u.id===id)}
function unitLabel(id){const u=unitById(id);return u?u.name:(id||'')}
function toast(m){const d=document.createElement('div');d.className='toast';d.textContent=m;document.body.appendChild(d);setTimeout(()=>d.remove(),2400)}
const $=s=>document.querySelector(s);
/* In the App Store / Play Store app the 'add to home screen' tips are meaningless. */
const NATIVE=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());

/* ---------------- API ---------------- */
async function rpc(fn,args){
 let r;
 try{const h={apikey:KEY,'Content-Type':'application/json'};if(KEY.startsWith('eyJ'))h.Authorization='Bearer '+KEY;
  r=await fetch(SB+'/rest/v1/rpc/'+fn,{method:'POST',headers:h,body:JSON.stringify(args||{})})}
 catch(e){throw new Error(t('netErr'))}
 const txt=await r.text();let d=null;try{d=txt?JSON.parse(txt):null}catch(e){}
 if(!r.ok){const m=(d&&(d.message||d.hint))||txt||'';
  if(m.includes('ops:auth')){signOutLocal();throw new Error('')}
  const map={'ops:badpass':'wrong','ops:name':'needName','ops:nopass':'noPass','ops:forbidden':'forbidden','ops:notenough':'notEnough','ops:short8':'short8','ops:short':'short','ops:hasmgr':'hasMgr','ops:nomgr':'noMgr','ops:empty':'ideaEmpty','ops:locked':'locked','ops:nogabbai':'noGabbai','ops:email':'badEmail','ops:amount':'badAmount','ops:nokey':'noKey','ops:nofrom':'noFrom','ops:noemail':'noEmailErr','ops:nobalance':'noBalance'};
  const k=Object.keys(map).find(x=>m.includes(x));throw new Error(k?t(map[k]):(m||t('netErr')))}
 return d}
const api=(fn,args)=>rpc(fn,Object.assign({p_token:S.token},args||{}));

/* ---------------- Anmeldung ---------------- */
async function staffLogin(){
 const name=$('#lName').value.trim(),pass=$('#lPass').value;ls('t7_name',name);
 if(!name){S.err=t('needName');render();return}
 S.busy=true;S.err='';render();
 try{const tok=await rpc('ops_staff_login',{p_name:name,p_pass:pass});if(!tok)throw new Error(t('wrong'));await afterLogin(tok)}
 catch(e){S.err=e.message;S.busy=false;render()}}
async function managerLogin(){
 const u='admin',pass=$('#mPass').value,dn=$('#mName').value.trim();S.mName=$('#mName').value;ls('t7_mname',dn);
 if(!dn){S.err=t('needName');render();return}
 const setup=S.hasManager===false;
 if(setup&&pass!==$('#mPass2').value){S.err=t('mismatch');render();return}
 S.busy=true;S.err='';render();
 try{const tok=setup?await rpc('ops_manager_setup',{p_user:u,p_pass:pass,p_name:dn}):await rpc('ops_manager_pass_login',{p_user:u,p_pass:pass,p_name:dn});
  if(!tok)throw new Error(t('wrong'));ls('t7_mname',dn);await afterLogin(tok)}
 catch(e){S.err=e.message||t('netErr');S.busy=false;if(e.message===t('noMgr'))S.hasManager=false;render()}}
async function gabbaiLogin(){
 const name=$('#gName').value.trim(),pass=$('#gPass').value;ls('t7_gname',name);
 if(!name){S.err=t('needName');render();return}
 S.busy=true;S.err='';render();
 try{const tok=await rpc('g_login',{p_name:name,p_pass:pass});if(!tok)throw new Error(t('wrong'));await afterLogin(tok)}
 catch(e){S.err=e.message;S.busy=false;render()}}
async function checkManager(){try{const st=await rpc('ops_status',{});S.hasManager=!!st.has_manager}catch(e){S.hasManager=null}render()}
async function afterLogin(tok){S.token=tok;ls('t7_token',tok);S.busy=false;S.err='';await boot()}
function signOutLocal(){S.token=null;S.me=null;REV=null;ls('t7_token',null);stopPoll();render()}
async function logout(){try{await api('ops_logout')}catch(e){}signOutLocal()}

/* ---------------- Daten ---------------- */
async function boot(){
 if(!S.token){render();return}
 try{S.me=await api('ops_me')}catch(e){S.bootErr=e.message;render();return}
 if(S.me.role==='gabbai'){if(!['members','mails','settings'].includes(S.tab))S.tab='members';render();await gLoad();render();return}
 if(S.me.role!=='manager'&&S.tab==='reports')S.tab='chat';
 render();
 await Promise.all([loadUnits(),loadItems(),loadIssues(),loadIdeas(),loadMsgs()]).catch(e=>e.message&&toast(e.message));
 render();startPoll()}
async function loadUnits(){S.units=await api('ops_units')||[]}
async function loadItems(){S.items=await api('ops_items')||[]}
async function loadIssues(){S.issues=await api('ops_issues_list')||[]}
async function loadIdeas(){S.ideas=await api('ops_ideas_list')||[]}
async function loadMsgs(){
 const n=await api('ops_msgs',{p_after:S.lastMsg})||[];
 if(!n.length)return false;
 S.msgs=S.msgs.concat(n).slice(-500);S.lastMsg=n[n.length-1].id;
 return true}
/* Live sync: every device asks "what changed?" every few seconds (one tiny
   counter per area) and reloads only that area, so everyone sees the same thing. */
let pollT=null,REV=null;
async function syncNow(){
 if(!S.token||!S.me)return;
 let rev;try{rev=await api('ops_rev')||{}}catch(e){return}
 const changed=k=>!REV||rev[k]!==REV[k];
 const first=REV===null;REV=rev;if(first)return;
 const jobs=[];let screen=false;
 if(changed('msgs'))jobs.push(loadMsgs().then(g=>{if(g){if(S.tab==='chat')renderMsgs(true);updateBadge()}}));
 if(changed('issues')){jobs.push(loadIssues(),loadUnits());screen=screen||['issues','units','reports'].includes(S.tab)}
 if(changed('ideas')){jobs.push(loadIdeas());screen=screen||['ideas','reports'].includes(S.tab)}
 if(changed('items')){jobs.push(loadItems());screen=screen||['stock','reports'].includes(S.tab);if(S.tab==='reports')S.rMoves=null}
 if(changed('units')){jobs.push(loadUnits());screen=screen||S.tab==='units'}
 await Promise.all(jobs).catch(()=>{});
 updateNavBadges();
 if(screen)safeRender()}
/* Never yank the screen from under someone: wait while a form is open, they are typing or recording. */
function busyUI(){const a=document.activeElement;return !!$('.sheetbg')||!!$('.attach')||!!REC||!!(a&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))}
function safeRender(){if(busyUI()){S.dirty=true;return}S.dirty=false;const m=$('#main'),y=m?m.scrollTop:0;render();const m2=$('#main');if(m2)m2.scrollTop=y}
function setBadge(id,n){const btn=$('#tab-'+id);if(!btn)return;const b=btn.querySelector('.badge:not(.wab)');
 if(n){if(b)b.textContent=n;else btn.insertAdjacentHTML('beforeend',`<span class="badge">${n}</span>`)}else if(b)b.remove()}
function openCount(){return S.issues.filter(i=>i.status!=='done').length}
function newIdeas(){return S.ideas.filter(i=>i.status==='new').length}
function updateNavBadges(){setBadge('issues',openCount());if(S.me&&S.me.role==='manager')setBadge('ideas',newIdeas())}
function startPoll(){stopPoll();const tick=async()=>{if(!S.token)return;await syncNow();if(S.dirty&&!busyUI())safeRender();
  pollT=setTimeout(tick,document.hidden?30000:4000)};pollT=setTimeout(tick,1500)}
function stopPoll(){if(pollT)clearTimeout(pollT);pollT=null}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&S.token)startPoll()});
document.addEventListener('focusout',()=>setTimeout(()=>{if(S.dirty&&!busyUI())safeRender()},300));

/* ---------------- Fotos ---------------- */
function pickPhoto(cam,cb){closeAttach();const el=cam?$('#fCam'):$('#fGal');el.value='';el.onchange=async()=>{const f=el.files[0];if(!f)return;try{cb(await shrink(f))}catch(e){toast(e.message)}};el.click()}
function shrink(file){return new Promise((res,rej)=>{const url=URL.createObjectURL(file);const img=new Image();
 img.onload=()=>{const max=1280;let w=img.naturalWidth,h=img.naturalHeight;const k=Math.min(1,max/Math.max(w,h));w=Math.round(w*k);h=Math.round(h*k);
  const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);URL.revokeObjectURL(url);
  const du=c.toDataURL('image/jpeg',.72);res({mime:'image/jpeg',data:du.split(',')[1],url:du})};
 img.onerror=()=>{URL.revokeObjectURL(url);rej(new Error('Bild konnte nicht geladen werden'))};img.src=url})}
async function uploadFile(p){return api('ops_photo_put',{p_mime:p.mime,p_data:p.data})}
async function getFile(id){if(S.photos[id])return S.photos[id];const d=await api('ops_photo_get',{p_id:id});if(!d)return null;S.photos[id]='data:'+d.mime+';base64,'+d.data;return S.photos[id]}
async function fillPhotos(root){
 (root||document).querySelectorAll('img[data-pid]').forEach(async el=>{
  const id=el.dataset.pid;if(S.photos[id]){el.src=S.photos[id];return}
  try{const src=await getFile(id);if(src)document.querySelectorAll('img[data-pid="'+id+'"]').forEach(x=>x.src=src)}catch(e){}})}
function photoTag(id,cls){return id?`<img class="${cls||'photo'}" data-pid="${esc(id)}" alt="" onclick="event.stopPropagation();zoom(this.src)">`:''}
function zoom(src){if(!src||!src.startsWith('data:image'))return;const d=document.createElement('div');d.className='lightbox';d.innerHTML=`<img src="${src}">`;d.onclick=()=>d.remove();document.body.appendChild(d)}

/* ---------------- Sprachaufnahme ---------------- */
let REC=null,ideaAudio=null;const MAXREC=180;
function recMime(){if(!window.MediaRecorder)return '';for(const m of ['audio/mp4;codecs=mp4a.40.2','audio/mp4','audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus'])
 {try{if(MediaRecorder.isTypeSupported(m))return m}catch(e){}}return ''}
async function startRec(){
 if(REC)return;
 if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.MediaRecorder){toast(t('micErr'));return}
 let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}})}catch(e){toast(t('micErr'));return}
 const mime=recMime();let mr;
 try{mr=new MediaRecorder(stream,mime?{mimeType:mime,audioBitsPerSecond:32000}:{audioBitsPerSecond:32000})}catch(e){mr=new MediaRecorder(stream)}
 const chunks=[];mr.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data)};
 const t0=Date.now();
 REC={mr,stream,t0,timer:setInterval(()=>{const s=(Date.now()-t0)/1000;const el=$('#recT');if(el)el.textContent=secs(s);if(s>=MAXREC)stopRec()},250)};
 mr.onstop=()=>{stream.getTracks().forEach(x=>x.stop());const sec=Math.round((Date.now()-t0)/1000);
  const blob=new Blob(chunks,{type:(mr.mimeType||mime||'audio/webm')});
  const fr=new FileReader();fr.onload=()=>{const du=String(fr.result);ideaAudio={mime:(blob.type||'audio/webm'),data:du.split(',')[1],url:URL.createObjectURL(blob),secs:sec};drawRec()};fr.readAsDataURL(blob)};
 mr.start(1000);drawRec()}
function stopRec(){if(!REC)return;clearInterval(REC.timer);const r=REC;REC=null;try{r.mr.stop()}catch(e){}drawRec()}
function dropRec(){if(REC)stopRec();ideaAudio=null;drawRec()}
function drawRec(){const el=$('#recBox');if(!el)return;
 if(REC){el.innerHTML=`<div class="recbar on"><span class="recdot"></span><div class="grow"><b>${esc(t('recording'))}</b><div class="mute" id="recT">${secs((Date.now()-REC.t0)/1000)}</div></div>
  <button class="btn sm" style="background:var(--red)" onclick="stopRec()">${ic('stop','s f')}${esc(t('stopRec'))}</button></div>`;return}
 if(ideaAudio){el.innerHTML=`<div class="recbar"><span class="tile">${ic('mic')}</span><audio controls preload="metadata" src="${ideaAudio.url}"></audio>
  <button class="xbtn" onclick="dropRec()" aria-label="${esc(t('del'))}">${ic('trash')}</button></div>`;return}
 el.innerHTML=`<button class="btn soft block" onclick="startRec()">${ic('mic','s')}${esc(t('record'))}</button>`}

/* ---------------- Darstellung ---------------- */
const TABS={members:'users',mails:'mail',chat:'chat',issues:'tool',ideas:'bulb',stock:'box',units:'room',reports:'chart',settings:'sliders'};
function render(){
 const app=$('#app');
 if(!S.token||!S.me){setBar(false);app.innerHTML=S.token?`<main><div class="empty">${S.bootErr?ic('alert')+esc(S.bootErr)+`<button class="btn soft sm" onclick="S.bootErr='';render();boot()">${ic('refresh','s')}</button>`:''}</div></main>`:loginView();return}
 const GB=S.me.role==='gabbai';
 const tabs=GB?['members','mails','settings']:['chat','issues','ideas','stock','units'];if(S.me.role==='manager')tabs.push('reports');if(!GB)tabs.push('settings');
 if(!tabs.includes(S.tab))S.tab=tabs[0];
 const chat=S.tab==='chat',oc=openCount(),ni=S.me.role==='manager'?newIdeas():0;
 app.innerHTML=`${chat?'':`<div class="top"><h1>${esc(t(S.tab))}</h1><div class="who"><b>${esc(S.me.name)}</b>${esc(t(S.me.role==='manager'?'manager':S.me.role==='gabbai'?'gabbai':'staff'))}</div></div>`}
 <main id="main" ${chat?'style="padding:0;overflow:hidden"':''}>${view()}</main>
 ${fab()}
 <nav class="tabs">${tabs.map(k=>`<button id="tab-${k}" class="${S.tab===k?'on':''}" onclick="go('${k}')">${ic(TABS[k])}<span>${esc(t(k))}</span>${
   k==='chat'?'<span class="badge wab" id="chatBadge" hidden></span>':''}${k==='issues'&&oc?`<span class="badge">${oc}</span>`:''}${k==='ideas'&&ni?`<span class="badge">${ni}</span>`:''}</button>`).join('')}</nav>`;
 if(chat)renderMsgs(false);
 setBar(chat);updateBadge();fillPhotos($('#main'));if(S.tab==='settings'&&S.me.role==='manager')gpState()}
function fab(){if(S.tab==='members')return `<button class="fab" aria-label="${esc(t('newMember'))}" onclick="editMember()">${ic('plus')}</button>`;
 if(S.tab==='issues')return `<button class="fab" aria-label="${esc(t('newIssue'))}" onclick="newIssue(S.issueApt)">${ic('plus')}</button>`;
 if(S.tab==='ideas')return `<button class="fab" aria-label="${esc(t('newIdea'))}" onclick="newIdea()">${ic('plus')}</button>`;
 if(S.tab==='stock'&&S.me.role==='manager')return `<button class="fab" aria-label="${esc(t('newItem'))}" onclick="editItem()">${ic('plus')}</button>`;
 if(S.tab==='units'&&S.me.role==='manager')return `<button class="fab" aria-label="${esc(t('newRoom'))}" onclick="editRoom()">${ic('plus')}</button>`;return ''}
/* Native app: tint the phone's status bar to match the screen (green behind the WhatsApp-style chat). */
let _bar='';function setBar(chat){if(!NATIVE)return;const k=chat?'chat':'page';if(k===_bar)return;_bar=k;
 try{const SBp=window.Capacitor.Plugins.StatusBar;if(!SBp)return;SBp.setStyle({style:chat?'DARK':'LIGHT'}).catch(()=>{});
  SBp.setBackgroundColor&&SBp.setBackgroundColor({color:chat?'#008069':'#f6f4ef'}).catch(()=>{})}catch(e){}}
function go(k){S.tab=k;ls('t7_tab',k);if(k==='reports')S.rMoves=null;if(k==='mails')S.gMails=null;render();$('#main')&&($('#main').scrollTop=0);if(k==='chat')startPoll()}
function view(){return({members:membersView,mails:mailsView,chat:chatView,issues:issuesView,ideas:ideasView,stock:stockView,units:unitsView,reports:reportsView,settings:settingsView}[S.tab]||chatView)()}
/* Code fields: an eye button shows / hides what was typed. */
function pw(input){return `<div class="pw">${input}<button type="button" class="eyeb" aria-label="Code anzeigen" onclick="togglePw(this)">${ic('eye')}</button></div>`}
function togglePw(b){const i=b.parentNode.querySelector('input');const show=i.type==='password';i.type=show?'text':'password';b.innerHTML=ic(show?'eyeoff':'eye');b.setAttribute('aria-label',show?'Code verbergen':'Code anzeigen');i.focus()}
function sheadX(title){return `<div class="shead"><h3>${title}</h3><button class="xbtn" onclick="closeSheet()" aria-label="${esc(t('cancel'))}">${ic('x')}</button></div>`}
function searchBox(val,handler){return `<div class="search"><div class="box">${ic('search','s')}<input placeholder="${esc(t('search'))}" value="${esc(val)}" oninput="${handler}"></div></div>`}
function sheet(html){closeSheet();const bg=document.createElement('div');bg.className='sheetbg';bg.innerHTML=`<div class="sheet"><div class="grab"></div>${html}</div>`;
 bg.addEventListener('click',e=>{if(e.target===bg)closeSheet()});document.body.appendChild(bg);fillPhotos(bg);return bg}
function closeSheet(){if(REC)stopRec();document.querySelectorAll('.sheetbg').forEach(x=>x.remove());if(S.dirty)setTimeout(safeRender,0)}
function unitOptions(sel){return `<option value="">${esc(t('noRoom'))}</option>`+S.units.map(u=>`<option value="${esc(u.id)}" ${u.id===sel?'selected':''}>${esc(u.name)}</option>`).join('')}

function loginView(){const st=S.loginMode==='staff',gb=S.loginMode==='gabbai';return `<main style="padding:0"><div class="login">
 <div class="brand"><div class="mark">Tempelgasse 7</div><div class="rule"></div><div class="sub">Team</div></div>
 <div class="seg"><button class="${st?'on':''}" onclick="S.loginMode='staff';S.err='';render()">${esc(t('staff'))}</button><button class="${S.loginMode==='manager'?'on':''}" onclick="S.loginMode='manager';S.err='';render();checkManager()">${esc(t('manager'))}</button><button class="${gb?'on':''}" onclick="S.loginMode='gabbai';S.err='';render()">${esc(t('gabbai'))}</button></div>
 ${gb?`
  <label class="f">${esc(t('yourName'))}</label><input class="inp" id="gName" autocomplete="given-name" value="${esc(ls('t7_gname')||'')}">
  <label class="f">${esc(t('gabbaiCode'))}</label>${pw(`<input class="inp" id="gPass" type="password" autocapitalize="none" autocomplete="current-password" onkeydown="if(event.key==='Enter')gabbaiLogin()">`)}
  ${S.err?`<div class="err">${esc(S.err)}</div>`:''}
  <button class="btn block" style="margin-top:22px" ${S.busy?'disabled':''} onclick="gabbaiLogin()">${esc(t('login'))}</button>`:st?`
  <label class="f">${esc(t('yourName'))}</label><input class="inp" id="lName" autocomplete="given-name" value="${esc(ls('t7_name')||'')}">
  <label class="f">${esc(t('teamCode'))}</label>${pw(`<input class="inp" id="lPass" type="password" autocapitalize="none" autocomplete="current-password" onkeydown="if(event.key==='Enter')staffLogin()">`)}
  ${S.err?`<div class="err">${esc(S.err)}</div>`:''}
  <button class="btn block" style="margin-top:22px" ${S.busy?'disabled':''} onclick="staffLogin()">${esc(t('login'))}</button>`:`
  ${S.hasManager===false?`<div class="okmsg" style="margin:0 0 4px">${esc(t('firstMgr'))}</div>`:''}
  <label class="f">${esc(t('yourName'))}</label><input class="inp" id="mName" autocomplete="given-name" value="${esc(S.mName??ls('t7_mname')??'')}">
  <label class="f">${esc(t('adminCode'))}</label>${pw(`<input class="inp" id="mPass" type="password" inputmode="numeric" autocomplete="${S.hasManager===false?'new-password':'current-password'}" onkeydown="if(event.key==='Enter'&&!document.getElementById('mPass2'))managerLogin()">`)}
  ${S.hasManager===false?`<label class="f">${esc(t('repeatCode'))}</label>${pw(`<input class="inp" id="mPass2" type="password" inputmode="numeric" autocomplete="new-password" onkeydown="if(event.key==='Enter')managerLogin()">`)}`:''}
  ${S.err?`<div class="err">${esc(S.err)}</div>`:''}
  <button class="btn block" style="margin-top:22px" ${S.busy?'disabled':''} onclick="managerLogin()">${esc(t(S.hasManager===false?'createMgr':'login'))}</button>`}
 ${NATIVE?'':`<div class="hint">${esc(t('installHint'))}</div>`}</div></main>`}

/* ---------------- Chat (WhatsApp-Stil) ---------------- */
function chatView(){
 const names=[...new Set(S.msgs.slice().reverse().map(m=>m.by_name))].slice(0,6);
 return `<div class="wa">
 <div class="wa-head"><div class="wa-av">${GROUP_AV}</div><div class="grow"><div class="nm">Tempelgasse 7 · Team</div><div class="sub">${esc(names.join(', ')||S.me.name)}</div></div></div>
 <div id="msgs"></div>
 <div id="chatPrev"></div>
 <div class="wa-bar">
  <button class="ib" aria-label="${esc(t('gallery'))}" onclick="toggleAttach()">${ic('plus')}</button>
  <div class="wa-in"><textarea id="chatIn" rows="1" placeholder="${esc(t('typeMsg'))}" oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'" onkeydown="if(event.key==='Enter'&&!event.shiftKey&&!('ontouchstart' in window)){event.preventDefault();sendMsg()}"></textarea>
   <button class="ib" aria-label="${esc(t('camera'))}" onclick="pickPhoto(true,setChatPhoto)">${ic('camera')}</button></div>
  <button class="wa-send" aria-label="${esc(t('send'))}" onclick="sendMsg()">${SEND_SVG}</button></div></div>`}
function toggleAttach(){if($('.attach')){closeAttach();return}
 const d=document.createElement('div');d.className='attach';
 d.innerHTML=`<button onclick="pickPhoto(false,setChatPhoto)"><span class="circ" style="background:#bf59cf">${ic('image')}</span>${esc(t('gallery'))}</button>
 <button onclick="pickPhoto(true,setChatPhoto)"><span class="circ" style="background:#ff2e74">${ic('camera')}</span>${esc(t('camera'))}</button>`;
 $('#app').appendChild(d);setTimeout(()=>document.addEventListener('click',closeAttachOutside,{once:true}),0)}
function closeAttachOutside(e){if(!e.target.closest('.attach'))closeAttach()}
function closeAttach(){document.querySelectorAll('.attach').forEach(x=>x.remove())}
function setChatPhoto(p){S.pending=p;const el=$('#chatPrev');if(el)el.innerHTML=`<div class="wa-prev"><img src="${p.url}"><div class="grow mute">${esc(t('photo'))}</div><button class="xbtn" onclick="S.pending=null;$('#chatPrev').innerHTML=''">${ic('x')}</button></div>`}
function renderMsgs(onlyNew){
 const box=$('#msgs');if(!box)return;
 const nearBottom=box.scrollHeight-box.scrollTop-box.clientHeight<120;
 if(!S.msgs.length){box.innerHTML=`<div class="wa-note" style="margin-top:24px">${esc(t('noMsgs'))}</div>`;return}
 let html='',lastDay='',prev=null;const me=S.me.name;
 const today=isoDay(new Date()),yest=isoDay(new Date(Date.now()-864e5));
 for(const m of S.msgs){const d=isoDay(new Date(m.at));
  if(d!==lastDay){lastDay=d;prev=null;html+=`<div class="wa-day"><span>${d===today?esc(t('today')):d===yest?esc(t('yesterday')):esc(fmt(m.at,{weekday:'long',day:'numeric',month:'long'}))}</span></div>`}
  if(m.sys){const iss=m.issue_id&&S.issues.find(i=>i.id===m.issue_id);
   const lbl={issue_new:t('issueNew'),issue_done:t('issueDone'),issue_reopen:t('issueReopen'),issue_progress:t('issueProgress'),idea_new:t('ideaNew')}[m.sys]||'';
   const open=m.idea_id?`openIdea(${m.idea_id})`:m.issue_id?`openIssue(${m.issue_id})`:'';
   html+=`<div class="wa-note ${m.sys==='issue_done'?'done':m.sys==='issue_progress'?'prog':m.sys==='idea_new'?'idea':''}"><b>${esc(lbl)}</b> · ${esc(m.by_name)} · ${esc(hm(m.at))}<br>${esc(m.body)}${iss&&iss.unit_id?` — ${esc(unitLabel(iss.unit_id))}`:''}
   ${m.photo_id?`<img data-pid="${esc(m.photo_id)}" alt="" onclick="zoom(this.src)">`:''}${open?`<br><button class="lk" onclick="${open}">${esc(t('view'))}</button>`:''}</div>`;prev=null;continue}
  const mine=m.by_name===me,first=!prev||prev.by_name!==m.by_name||(new Date(m.at)-new Date(prev.at))>6e5;prev=m;
  const meta=`<span class="wa-meta">${esc(hm(m.at))}${mine?TICKS:''}</span>`;
  const name=!mine&&first?`<div class="wa-name" style="color:${nameColor(m.by_name)}">${esc(m.by_name)}</div>`:'';
  html+=m.photo_id
   ?`<div class="wa-row ${mine?'out':'in'} ${first?'first':''}"><div class="wa-b pic ${m.body?'':'nocap'}">${name}<img data-pid="${esc(m.photo_id)}" alt="" onclick="zoom(this.src)">${m.body?`<div class="cap">${esc(m.body)}${meta}</div>`:meta}</div></div>`
   :`<div class="wa-row ${mine?'out':'in'} ${first?'first':''}"><div class="wa-b">${name}${esc(m.body)}${meta}</div></div>`}
 box.innerHTML=html;fillPhotos(box);
 if(!onlyNew||nearBottom)box.scrollTop=box.scrollHeight;
 markSeen()}
function markSeen(){if(S.tab==='chat'&&S.lastMsg){S.seenMsg=S.lastMsg;ls('t7_seen',String(S.lastMsg))}updateBadge()}
function updateBadge(){const b=$('#chatBadge');if(!b)return;const n=S.msgs.filter(m=>m.id>S.seenMsg&&m.by_name!==S.me.name).length;b.hidden=!n||S.tab==='chat';b.textContent=n>99?'99+':n}
async function sendMsg(){
 const inp=$('#chatIn');const body=inp.value.trim();const p=S.pending;
 if(!body&&!p)return;
 inp.disabled=true;
 try{let pid=null;if(p){pid=await uploadFile(p);S.photos[pid]=p.url}
  await api('ops_msg_send',{p_body:body,p_photo:pid});
  inp.value='';inp.style.height='auto';S.pending=null;$('#chatPrev').innerHTML='';
  await loadMsgs();renderMsgs(false)}
 catch(e){e.message&&toast(e.message)}
 inp.disabled=false;inp.focus()}

/* ---------------- Meldungen ---------------- */
function issuesView(){
 const f=S.issueFilter;let list=S.issues.filter(i=>f==='all'||i.status===f);
 if(S.issueApt)list=list.filter(i=>i.unit_id===S.issueApt);
 const groups={};list.forEach(i=>{const c=PCATS.includes(i.category)?i.category:'other';(groups[c]=groups[c]||[]).push(i)});
 const cnt=k=>S.issues.filter(i=>(k==='all'||i.status===k)&&(!S.issueApt||i.unit_id===S.issueApt)).length;
 return `<div class="seg">${['open','progress','done','all'].map(k=>`<button class="${f===k?'on':''}" onclick="S.issueFilter='${k}';render()">${esc(t(k))}<span class="c">${cnt(k)}</span></button>`).join('')}</div>
 ${S.issueApt?`<div class="group" style="margin-bottom:6px"><div class="cell"><span class="tile">${ic(roomIcon(S.issueApt))}</span><div class="grow t1">${esc(unitLabel(S.issueApt))}</div><button class="xbtn" onclick="S.issueApt='';render()">${ic('x')}</button></div></div>`:''}
 ${list.length?PCATS.filter(c=>groups[c]).map(c=>`<div class="sec">${ic(PICON[c],'s')}${esc(t('pcat')[c])}<span class="n">${groups[c].length}</span></div><div class="group">${groups[c].map(issueCell).join('')}</div>`).join(''):`<div class="empty">${ic('check')}${esc(t('noIssues'))}</div>`}`}
function stPill(i){const k=i.status;return `<span class="pill ${k==='done'?'green':k==='progress'?'amber':'red'}">${esc(t(k==='done'?'stDone':k==='progress'?'stProgress':'stOpen'))}</span>`}
function issueCell(i){const done=i.status==='done';return `<button class="cell" onclick="openIssue(${i.id})">
 <div class="grow"><div class="row" style="gap:8px"><div class="t1 grow">${esc(i.title)}</div>${stPill(i)}</div>
 <div class="t2">${i.unit_id?esc(i.unit_name||i.unit_id):esc(t('noRoom'))}</div>
 <div class="t2">${esc(fmt(i.reported_at))} · ${esc(i.reported_by)}${done?` → ${esc(fmt(i.resolved_at))} · ${esc(dur(i.reported_at,i.resolved_at))}`:i.status==='progress'?` → ${esc(t('stProgress'))}: ${esc(i.progress_by||'')}`:''}</div></div>
 ${ic('chev','s chev')}</button>`}
let issuePhoto=null;
function newIssue(apt){issuePhoto=null;sheet(`${sheadX(esc(t('newIssue')))}
 <label class="f">${esc(t('room'))}</label><select class="inp" id="niApt">${unitOptions(apt||'')}</select>
 <label class="f">${esc(t('topic'))}</label><select class="inp" id="niCat">${PCATS.map(c=>`<option value="${c}">${esc(t('pcat')[c])}</option>`).join('')}</select>
 <label class="f">${esc(t('whatHappened'))}</label><input class="inp" id="niTitle" maxlength="200">
 <label class="f">${esc(t('details'))}</label><textarea class="inp" id="niDet"></textarea>
 <div id="niPrev"></div>
 <div class="row" style="margin-top:12px"><button class="btn ghost sm" onclick="pickPhoto(true,setIssuePhoto)">${ic('camera','s')}${esc(t('camera'))}</button><button class="btn ghost sm" onclick="pickPhoto(false,setIssuePhoto)">${ic('image','s')}${esc(t('gallery'))}</button></div>
 <div id="niErr"></div>
 <button class="btn block" style="margin-top:20px" id="niGo" onclick="submitIssue()">${esc(t('report'))}</button>`)}
function setIssuePhoto(p){issuePhoto=p;$('#niPrev').innerHTML=`<div class="thumb"><img src="${p.url}"><div class="grow mute">${esc(t('photo'))}</div><button class="xbtn" onclick="issuePhoto=null;$('#niPrev').innerHTML=''">${ic('x')}</button></div>`}
async function submitIssue(){const title=$('#niTitle').value.trim();if(!title){$('#niTitle').focus();return}
 const b=$('#niGo');b.disabled=true;b.textContent=t('sending');
 try{let pid=null;if(issuePhoto){pid=await uploadFile(issuePhoto);S.photos[pid]=issuePhoto.url}
  await api('ops_issue_new',{p_unit:$('#niApt').value,p_cat:$('#niCat').value,p_title:title,p_details:$('#niDet').value.trim(),p_photo:pid});
  closeSheet();toast(t('saved'));await Promise.all([loadIssues(),loadMsgs(),loadUnits()]);S.issueFilter='open';render()}
 catch(e){$('#niErr').innerHTML=`<div class="err">${esc(e.message)}</div>`;b.disabled=false;b.textContent=t('report')}}
function openIssue(id){const i=S.issues.find(x=>x.id===id);if(!i){toast('…');return}const done=i.status==='done';
 sheet(`<div class="row" style="gap:8px;margin-bottom:10px"><span class="pill grey nodot">${ic(PICON[i.category]||'help','s')} ${esc(t('pcat')[i.category]||i.category)}</span><span class="grow"></span>${stPill(i)}<button class="xbtn" onclick="closeSheet()">${ic('x')}</button></div>
 <h3 style="font-size:20px">${esc(i.title)}</h3>
 <div class="mute" style="margin-top:4px">${i.unit_id?esc(i.unit_name||i.unit_id):esc(t('noRoom'))}</div>
 ${i.details?`<p style="white-space:pre-wrap;margin:12px 0 0">${esc(i.details)}</p>`:''}${photoTag(i.photo_id)}
 <div class="card" style="margin-top:14px"><div class="timeline">
  <div class="ev"><div class="when">${esc(t('reportedAt'))} · ${esc(fmt(i.reported_at))}</div><div class="by">${esc(t('reportedBy'))}: ${esc(i.reported_by)}</div></div>
  ${i.progress_at?`<div class="ev prog"><div class="when">${esc(t('progressAt'))} · ${esc(fmt(i.progress_at))}</div><div class="by">${esc(t('progressBy'))}: ${esc(i.progress_by)}</div>${i.progress_note?`<div style="white-space:pre-wrap;margin-top:6px;font-size:14.5px">${esc(i.progress_note)}</div>`:''}</div>`:''}
  ${done?`<div class="ev ok"><div class="when">${esc(t('handledAt'))} · ${esc(fmt(i.resolved_at))}</div><div class="by">${esc(t('handledBy'))}: ${esc(i.resolved_by)} · ${esc(t('took'))} ${esc(dur(i.reported_at,i.resolved_at))}</div>${i.resolution_note?`<div style="white-space:pre-wrap;margin-top:6px;font-size:14.5px">${esc(i.resolution_note)}</div>`:''}</div>`:''}
 </div></div>
 ${done?`<button class="btn ghost block" onclick="setIssue(${i.id},false)">${ic('undo','s')}${esc(t('reopen'))}</button>`:
 `<label class="f">${esc(t(i.status==='open'?'progressNote':'handleNote'))}</label><textarea class="inp" id="isNote"></textarea>
 ${i.status==='open'?`<button class="btn block" style="margin-top:14px;background:var(--amber)" onclick="setProgress(${i.id})">${ic('clock','s')}${esc(t('markProgress'))}</button>`:''}
 <button class="btn ok block" style="margin-top:10px" onclick="setIssue(${i.id},true)">${ic('check','s')}${esc(t('markDone'))}</button>
 ${i.status==='progress'?`<button class="btn ghost block" style="margin-top:10px" onclick="setIssue(${i.id},false)">${ic('undo','s')}${esc(t('reopen'))}</button>`:''}`}`)}
async function setProgress(id){const n=$('#isNote');
 try{await api('ops_issue_progress',{p_id:id,p_note:n?n.value.trim():''});closeSheet();toast(t('saved'));await Promise.all([loadIssues(),loadMsgs(),loadUnits()]);render()}
 catch(e){e.message&&toast(e.message)}}
async function setIssue(id,done){const n=$('#isNote');
 try{await api('ops_issue_set',{p_id:id,p_done:done,p_note:n?n.value.trim():''});closeSheet();toast(t('saved'));await Promise.all([loadIssues(),loadMsgs(),loadUnits()]);render()}
 catch(e){e.message&&toast(e.message)}}

/* ---------------- Ideen (Text oder Sprachnachricht) ---------------- */
function ideasView(){const f=S.ideaFilter;const list=S.ideas.filter(i=>f==='all'||i.status===f);
 const cnt=k=>S.ideas.filter(i=>k==='all'||i.status===k).length;
 return `<div class="seg">${[['new','idNew'],['planned','idPlanned'],['done','idDone'],['all','all']].map(([k,l])=>`<button class="${f===k?'on':''}" onclick="S.ideaFilter='${k}';render()">${esc(t(l))}<span class="c">${cnt(k)}</span></button>`).join('')}</div>
 ${list.length?`<div class="group">${list.map(ideaCell).join('')}</div>`:`<div class="empty">${ic('bulb')}${esc(t('noIdeas'))}<button class="btn sm" onclick="newIdea()">${ic('plus','s')}${esc(t('newIdea'))}</button></div>`}`}
function idPill(i){const [l,c]=ISTAT[i.status]||ISTAT.new;return `<span class="pill ${c}">${esc(t(l))}</span>`}
function ideaCell(i){return `<button class="cell ind" onclick="openIdea(${i.id})">
 <span class="tile">${ic(i.audio_id?'mic':'bulb')}</span>
 <div class="grow"><div class="row" style="gap:8px"><div class="t1 grow clamp">${i.body?esc(i.body):`${esc(t('voice'))} · ${secs(i.audio_secs)}`}</div>${idPill(i)}</div>
 <div class="t2">${esc(fmt(i.at))} · ${esc(i.by_name)}${i.unit_name?' · '+esc(i.unit_name):''}${i.body&&i.audio_id?` · ${ic('mic','s')} ${secs(i.audio_secs)}`:''}</div></div>
 ${ic('chev','s chev')}</button>`}
function newIdea(){ideaAudio=null;sheet(`${sheadX(esc(t('newIdea')))}
 <label class="f">${esc(t('ideaText'))}</label><textarea class="inp" id="idBody" placeholder="${esc(t('ideaPh'))}"></textarea>
 <label class="f">${esc(t('voice'))}</label><div id="recBox"></div>
 <label class="f">${esc(t('room'))}</label><select class="inp" id="idApt">${unitOptions('')}</select>
 <div id="idErr"></div>
 <button class="btn block" style="margin-top:20px" id="idGo" onclick="submitIdea()">${esc(t('send'))}</button>`);drawRec()}
async function submitIdea(){if(REC){stopRec();await new Promise(r=>setTimeout(r,400))}
 const body=$('#idBody').value.trim();if(!body&&!ideaAudio){$('#idErr').innerHTML=`<div class="err">${esc(t('ideaEmpty'))}</div>`;return}
 const b=$('#idGo');b.disabled=true;b.textContent=t('sending');
 try{let aid=null;if(ideaAudio){aid=await uploadFile(ideaAudio)}
  await api('ops_idea_new',{p_unit:$('#idApt').value,p_body:body,p_audio:aid,p_secs:ideaAudio?ideaAudio.secs:null});
  ideaAudio=null;closeSheet();toast(t('saved'));await Promise.all([loadIdeas(),loadMsgs()]);S.ideaFilter='new';render()}
 catch(e){$('#idErr').innerHTML=`<div class="err">${esc(e.message)}</div>`;b.disabled=false;b.textContent=t('send')}}
function openIdea(id){const i=S.ideas.find(x=>x.id===id);if(!i){toast('…');return}const mgr=S.me.role==='manager';
 sheet(`<div class="row" style="gap:8px;margin-bottom:10px"><span class="pill grey nodot">${ic('bulb','s')} ${esc(t('ideas'))}</span><span class="grow"></span>${idPill(i)}<button class="xbtn" onclick="closeSheet()">${ic('x')}</button></div>
 ${i.body?`<p style="white-space:pre-wrap;margin:4px 0 0;font-size:17px">${esc(i.body)}</p>`:''}
 ${i.audio_id?`<div class="recbar" style="margin-top:12px" id="plBox"><span class="tile">${ic('mic')}</span><button class="btn soft sm grow" onclick="playIdea('${esc(i.audio_id)}')">${ic('play','s f')}${esc(t('loadAudio'))} · ${secs(i.audio_secs)}</button></div>`:''}
 <div class="card" style="margin-top:14px"><div class="kv">
  <div class="k">${esc(t('submittedBy'))}</div><div>${esc(i.by_name)} · ${esc(fmt(i.at))}</div>
  ${i.unit_name?`<div class="k">${esc(t('room'))}</div><div>${esc(i.unit_name)}</div>`:''}
  ${i.status_at?`<div class="k">${esc(t('statusBy'))}</div><div>${esc(i.status_by)} · ${esc(fmt(i.status_at))}</div>`:''}
 </div>${i.status_note?`<div style="white-space:pre-wrap;margin-top:10px;font-size:14.5px">${esc(i.status_note)}</div>`:''}</div>
 ${mgr?`<label class="f">${esc(t('ideaStatus'))}</label>
  <div class="acts" style="grid-template-columns:repeat(4,1fr);margin-top:0">${Object.keys(ISTAT).map(k=>`<button class="${i.status===k?'on':''}" data-k="${k}" onclick="document.querySelectorAll('.acts button').forEach(b=>b.classList.toggle('on',b.dataset.k==='${k}'))">${esc(t(ISTAT[k][0]))}</button>`).join('')}</div>
  <label class="f">${esc(t('ideaNote'))}</label><textarea class="inp" id="idNote">${esc(i.status_note||'')}</textarea>
  <button class="btn block" style="margin-top:14px" onclick="setIdea(${i.id})">${esc(t('save'))}</button>
  <button class="btn danger block" style="margin-top:10px" onclick="delIdea(${i.id})">${ic('trash','s')}${esc(t('del'))}</button>`:''}`)}
async function playIdea(aid){const box=$('#plBox');if(!box)return;box.innerHTML=`<span class="tile">${ic('mic')}</span><div class="mute">…</div>`;
 try{const src=await getFile(aid);box.innerHTML=`<span class="tile">${ic('mic')}</span><audio controls autoplay src="${src}"></audio>`}
 catch(e){box.innerHTML=`<div class="err" style="margin:0">${esc(e.message||t('netErr'))}</div>`}}
async function setIdea(id){const on=document.querySelector('.acts button.on');const st=on?on.dataset.k:'new';
 try{await api('ops_idea_set',{p_id:id,p_status:st,p_note:$('#idNote').value.trim()});closeSheet();toast(t('saved'));await loadIdeas();render()}
 catch(e){e.message&&toast(e.message)}}
async function delIdea(id){if(!confirm(t('delIdeaQ')))return;try{await api('ops_idea_delete',{p_id:id});closeSheet();await loadIdeas();render()}catch(e){toast(e.message)}}

/* ---------------- Lager ---------------- */
function stockView(){const q=S.stockQ.toLowerCase();
 let items=S.items.filter(i=>!q||(i.name||'').toLowerCase().includes(q));
 const shop=S.items.filter(i=>i.qty<i.min_qty);
 if(S.stockShop)items=items.filter(i=>i.qty<i.min_qty);
 const by={};items.forEach(i=>{const c=ICATS.includes(i.category)?i.category:'other';(by[c]=by[c]||[]).push(i)});
 return `${searchBox(S.stockQ,"S.stockQ=this.value;clearTimeout(window._sq);window._sq=setTimeout(()=>{render();const x=$('.search input');x.focus();x.setSelectionRange(x.value.length,x.value.length)},250)")}
 <div class="seg"><button class="${S.stockShop?'':'on'}" onclick="S.stockShop=false;render()">${esc(t('all'))}<span class="c">${S.items.length}</span></button><button class="${S.stockShop?'on':''}" onclick="S.stockShop=true;render()">${esc(t('shopping'))}<span class="c">${shop.length}</span></button></div>
 ${S.stockShop&&!items.length?`<div class="empty">${ic('check')}${esc(t('nothingToBuy'))}</div>`:''}
 ${ICATS.filter(c=>by[c]).map(c=>`<div class="sec">${ic(ICICON[c],'s')}${esc(t('icat')[c])}<span class="n">${by[c].length}</span></div><div class="group">${by[c].map(i=>{const low=i.qty<i.min_qty;return `<button class="cell" onclick="itemSheet(${i.id})">
  <div class="grow"><div class="t1">${esc(i.name)}</div><div class="t2">${esc(t('min'))} ${i.min_qty}${i.broken_30d?` · ${esc(t('broken'))} ${i.broken_30d}`:''}</div></div>
  ${low?`<span class="pill amber nodot">${esc(t('buy'))} ${i.min_qty-i.qty}</span>`:''}<div class="qty ${low?'low':''}">${i.qty}</div></button>`}).join('')}</div>`).join('')}`}
let mv={kind:'take',qty:1};
function itemSheet(id){const i=S.items.find(x=>x.id===id);if(!i)return;const mgr=S.me.role==='manager';mv={kind:'take',qty:1,id};
 const acts=[['take','up',t('take')],['return','down',t('ret')],['break','crack',t('brk')]];if(mgr)acts.push(['add','cart',t('add')]);
 sheet(`<div class="shead"><div class="grow"><h3 style="font-size:19px">${esc(i.name)}</h3><div class="mute" style="margin-top:3px">${esc(t('inStock'))} <b style="color:var(--ink)">${i.qty}</b> · ${esc(t('min'))} ${i.min_qty}</div></div>
  ${mgr?`<button class="xbtn" onclick="editItem(${i.id})" aria-label="${esc(t('editItem'))}">${ic('edit')}</button>`:''}<button class="xbtn" onclick="closeSheet()">${ic('x')}</button></div>
 <div class="acts" style="grid-template-columns:repeat(${acts.length},1fr)">${acts.map(([k,icn,l])=>`<button class="${k==='take'?'on':''}" data-k="${k}" onclick="mv.kind='${k}';document.querySelectorAll('.acts button').forEach(b=>b.classList.toggle('on',b.dataset.k==='${k}'));$('#mvAptW').hidden=('${k}'==='add')">${ic(icn)}${esc(l)}</button>`).join('')}</div>
 <label class="f">${esc(t('amount'))}</label>
 <div class="stepper"><button onclick="stepQ(-1)">${ic('minus')}</button><input class="inp" id="mvQ" type="number" inputmode="numeric" min="1" value="1"><button onclick="stepQ(1)">${ic('plus')}</button></div>
 <div id="mvAptW"><label class="f">${esc(t('forRoom'))}</label><select class="inp" id="mvApt">${unitOptions(ls('t7_lastRoom')||'')}</select></div>
 <label class="f">${esc(t('note'))}</label><input class="inp" id="mvNote">
 <div id="mvErr"></div>
 <button class="btn block" style="margin-top:20px" id="mvGo" onclick="doMove()">${esc(t('save'))}</button>`)}
function stepQ(d){const el=$('#mvQ');el.value=Math.max(1,(+el.value||0)+d)}
async function doMove(){const qty=Math.round(+$('#mvQ').value);if(!(qty>0))return;const apt=mv.kind==='add'?'':$('#mvApt').value;
 const b=$('#mvGo');b.disabled=true;
 try{await api('ops_move',{p_item:mv.id,p_kind:mv.kind,p_qty:qty,p_unit:apt,p_note:$('#mvNote').value.trim()});if(apt)ls('t7_lastRoom',apt);
  closeSheet();toast(t('saved'));await loadItems();render()}
 catch(e){$('#mvErr').innerHTML=`<div class="err">${esc(e.message)}</div>`;b.disabled=false}}
function editItem(id){const i=id?S.items.find(x=>x.id===id):{name:'',category:'sefarim',qty:0,min_qty:0};
 sheet(`${sheadX(esc(t(id?'editItem':'newItem')))}
 <label class="f">${esc(t('name'))}</label><input class="inp" id="itName" value="${esc(i.name||'')}">
 <label class="f">${esc(t('category'))}</label><select class="inp" id="itCat">${ICATS.map(c=>`<option value="${c}" ${i.category===c?'selected':''}>${esc(t('icat')[c])}</option>`).join('')}</select>
 <div class="row"><div class="grow"><label class="f">${esc(t('inStock'))}</label><input class="inp" id="itQty" type="number" inputmode="numeric" value="${i.qty}"></div>
 <div class="grow"><label class="f">${esc(t('min'))}</label><input class="inp" id="itMin" type="number" inputmode="numeric" value="${i.min_qty}"></div></div>
 <div id="itErr"></div>
 <button class="btn block" style="margin-top:20px" onclick="saveItem(${id||0})">${esc(t('save'))}</button>
 ${id?`<button class="btn danger block" style="margin-top:10px" onclick="delItem(${id})">${ic('trash','s')}${esc(t('del'))}</button>`:''}`)}
async function saveItem(id){const p={name:$('#itName').value.trim(),category:$('#itCat').value,qty:Math.max(0,Math.round(+$('#itQty').value||0)),min_qty:Math.max(0,Math.round(+$('#itMin').value||0))};
 if(id)p.id=id;if(!p.name){$('#itName').focus();return}
 try{await api('ops_item_save',{p});closeSheet();toast(t('saved'));await loadItems();render()}catch(e){$('#itErr').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function delItem(id){if(!confirm(t('delQ')))return;try{await api('ops_item_delete',{p_id:id});closeSheet();await loadItems();render()}catch(e){toast(e.message)}}

/* ---------------- Räume ---------------- */
function roomIcon(id){const u=unitById(id);return u&&IC[u.icon]?u.icon:'room'}
function unitsView(){const mgr=S.me.role==='manager';
 return S.units.length?`<div class="group">${S.units.map(u=>`<button class="cell ind" onclick="unitSheet('${esc(u.id)}')">
  <span class="tile">${ic(IC[u.icon]?u.icon:'room')}</span><div class="grow"><div class="t1">${esc(u.name)}</div></div>
  ${u.open_issues?`<span class="pill red">${u.open_issues}</span>`:''}${ic('chev','s chev')}</button>`).join('')}</div>
  ${mgr?`<button class="btn ghost block" style="margin-top:14px" onclick="editRoom()">${ic('plus','s')}${esc(t('newRoom'))}</button>`:''}`
  :`<div class="empty">${ic('room')}${esc(t('noUnits'))}${mgr?`<button class="btn sm" onclick="editRoom()">${ic('plus','s')}${esc(t('newRoom'))}</button>`:''}</div>`}
function unitSheet(id){const u=unitById(id);if(!u)return;const open=S.issues.filter(i=>i.unit_id===id&&i.status!=='done');const mgr=S.me.role==='manager';
 sheet(`<div class="shead"><h3>${esc(u.name)}</h3>${mgr?`<button class="xbtn" onclick="editRoom('${esc(id)}')" aria-label="${esc(t('editRoom'))}">${ic('edit')}</button>`:''}<button class="xbtn" onclick="closeSheet()">${ic('x')}</button></div>
 <div class="sec">${esc(t('openIssues'))}<span class="n">${open.length}</span></div>${open.length?`<div class="group">${open.map(issueCell).join('')}</div>`:`<div class="mute" style="padding:4px 6px">${esc(t('noIssues'))}</div>`}
 <button class="btn block" style="margin-top:18px" onclick="newIssue('${esc(id)}')">${ic('plus','s')}${esc(t('reportHere'))}</button>
 <button class="btn ghost block" style="margin-top:10px" onclick="closeSheet();S.issueApt='${esc(id)}';S.issueFilter='all';go('issues')">${ic('list','s')}${esc(t('history'))}</button>`)}
function editRoom(id){const u=id?unitById(id):{name:'',icon:'room',sort:(S.units.reduce((a,x)=>Math.max(a,x.sort||0),0)+10)};
 sheet(`${sheadX(esc(t(id?'editRoom':'newRoom')))}
 <label class="f">${esc(t('roomName'))}</label><input class="inp" id="rmName" value="${esc(u.name)}" maxlength="80">
 <label class="f">${esc(t('icon'))}</label><div class="icons">${RICONS.map(k=>`<button class="${(u.icon||'room')===k?'on':''}" data-k="${k}" title="${esc(t('ricon')[k])}" onclick="document.querySelectorAll('.icons button').forEach(b=>b.classList.toggle('on',b.dataset.k==='${k}'))">${ic(k)}</button>`).join('')}</div>
 <label class="f">${esc(t('order'))}</label><input class="inp" id="rmSort" type="number" inputmode="numeric" value="${u.sort??100}">
 <div id="rmErr"></div>
 <button class="btn block" style="margin-top:20px" onclick="saveRoom('${esc(id||'')}')">${esc(t('save'))}</button>
 ${id?`<button class="btn danger block" style="margin-top:10px" onclick="delRoom('${esc(id)}')">${ic('trash','s')}${esc(t('del'))}</button>`:''}`)}
async function saveRoom(id){const name=$('#rmName').value.trim();if(!name){$('#rmName').focus();return}
 const on=document.querySelector('.icons button.on');
 try{await api('ops_room_save',{p_id:id,p_name:name,p_icon:on?on.dataset.k:'room',p_sort:Math.round(+$('#rmSort').value||100)});closeSheet();toast(t('saved'));await loadUnits();render()}
 catch(e){$('#rmErr').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function delRoom(id){if(!confirm(t('delRoomQ')))return;try{await api('ops_room_delete',{p_id:id});closeSheet();await loadUnits();render()}catch(e){toast(e.message)}}

/* ---------------- Berichte (Admin) ---------------- */
function reportsView(){
 if(S.rMoves===null){loadReport();return `<div class="empty">…</div>`}
 const mv=S.rMoves;const sum={};mv.forEach(m=>{const s=sum[m.item_id]=sum[m.item_id]||{take:0,return:0,break:0,add:0};if(s[m.kind]!==undefined)s[m.kind]+=m.qty});
 const from=new Date(S.rFrom),to=new Date(S.rTo+'T23:59:59');
 const fixed=S.issues.filter(i=>i.status==='done'&&new Date(i.resolved_at)>=from&&new Date(i.resolved_at)<=to);
 const avg=fixed.length?fixed.reduce((a,i)=>a+(new Date(i.resolved_at)-new Date(i.reported_at)),0)/fixed.length:0;
 const rows=Object.keys(sum).map(id=>({i:S.items.find(x=>x.id==id)||{id,name:'#'+id},s:sum[id]}));
 return `<div class="row" style="margin-bottom:12px"><div class="grow"><label class="f" style="margin-top:0">${esc(t('from'))}</label><input class="inp" type="date" value="${S.rFrom}" onchange="S.rFrom=this.value;S.rMoves=null;render()"></div>
 <div class="grow"><label class="f" style="margin-top:0">${esc(t('to'))}</label><input class="inp" type="date" value="${S.rTo}" onchange="S.rTo=this.value;S.rMoves=null;render()"></div></div>
 <div class="stats">
  <div class="stat"><div class="v" style="color:var(--red)">${openCount()}</div><div class="l">${esc(t('issuesOpen'))}</div></div>
  <div class="stat"><div class="v" style="color:var(--green)">${fixed.length}</div><div class="l">${esc(t('issuesDone'))}</div></div>
  <div class="stat"><div class="v">${fixed.length?esc(dur(0,avg)):'—'}</div><div class="l">${esc(t('avgFix'))}</div></div>
  <div class="stat"><div class="v" style="color:var(--brass)">${newIdeas()}</div><div class="l">${esc(t('ideasNew'))}</div></div>
  <div class="stat"><div class="v" style="color:var(--amber)">${S.items.filter(i=>i.qty<i.min_qty).length}</div><div class="l">${esc(t('shopping'))}</div></div>
 </div>
 <div class="sec">${ic('box','s')}${esc(t('stock'))}</div>
 <div class="group" style="overflow-x:auto;padding:2px 6px">${rows.length?`<table class="r"><tr><th>${esc(t('item'))}</th><th class="n">${esc(t('taken'))}</th><th class="n">${esc(t('returned'))}</th><th class="n">${esc(t('broken'))}</th><th class="n">${esc(t('added'))}</th></tr>
  ${rows.map(r=>`<tr><td>${esc(r.i.name)}</td><td class="n">${r.s.take||''}</td><td class="n">${r.s.return||''}</td><td class="n">${r.s.break||''}</td><td class="n">${r.s.add||''}</td></tr>`).join('')}</table>`:`<div class="mute" style="padding:14px 10px">—</div>`}</div>
 <div class="sec">${ic('clock','s')}${esc(t('moves'))}<span class="n">${mv.length}</span></div>
 <div class="group">${mv.slice(0,200).map(m=>{const it=S.items.find(x=>x.id===m.item_id);return `<div class="cell"><div class="grow"><div class="t1" style="font-weight:400"><b style="font-weight:600">${esc(m.by_name)}</b> ${esc(t('kinds')[m.kind])} <b style="font-weight:600">${Math.abs(m.qty)}</b> × ${esc(it?it.name:'#'+m.item_id)}</div>
  <div class="t2">${esc(fmt(m.at))}${m.unit_name?' · '+esc(m.unit_name):''}${m.note?' · '+esc(m.note):''}</div></div></div>`}).join('')||'<div class="cell mute">—</div>'}</div>
 <button class="btn ghost block" style="margin-top:16px" onclick="downloadCsv()">${ic('download','s')}${esc(t('csv'))}</button>`}
async function loadReport(){try{S.rMoves=await api('ops_moves_list',{p_from:S.rFrom,p_to:S.rTo})||[]}catch(e){S.rMoves=[];e.message&&toast(e.message)}if(S.tab==='reports')render()}
function downloadCsv(){const q=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
 const lines=[['Datum','Zeit','Person','Aktion','Menge','Artikel','Raum','Notiz','Bestand danach'].join(';')];
 S.rMoves.forEach(m=>{const it=S.items.find(x=>x.id===m.item_id);const d=new Date(m.at);
  lines.push([isoDay(d),hm(m.at),m.by_name,t('kinds')[m.kind]||m.kind,m.qty,it?it.name:m.item_id,m.unit_name||'',m.note||'',m.qty_after??''].map(q).join(';'))});
 lines.push('');lines.push(['Gemeldet','Person','Raum','Thema','Problem','Status','In Bearbeitung seit','Bearbeitet von','Erledigt','Erledigt von','Notiz'].join(';'));
 S.issues.forEach(i=>lines.push([fmt(i.reported_at),i.reported_by,i.unit_name||'',t('pcat')[i.category]||i.category,i.title,t(i.status==='done'?'stDone':i.status==='progress'?'stProgress':'stOpen'),fmt(i.progress_at),i.progress_by||'',fmt(i.resolved_at),i.resolved_by||'',i.resolution_note||''].map(q).join(';')));
 lines.push('');lines.push(['Idee eingereicht','Person','Raum','Idee','Sprachnachricht','Status','Antwort'].join(';'));
 S.ideas.forEach(i=>lines.push([fmt(i.at),i.by_name,i.unit_name||'',i.body||'',i.audio_id?secs(i.audio_secs):'',t((ISTAT[i.status]||ISTAT.new)[0]),i.status_note||''].map(q).join(';')));
 const blob=new Blob(['﻿'+lines.join('\r\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download=`tempelgasse7-bericht_${S.rFrom}_${S.rTo}.csv`;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)}

/* ---------------- Gabbai: Mitglieder, offene Beträge, E-Mails ---------------- */
function eur(n){return new Intl.NumberFormat('de-AT',{style:'currency',currency:'EUR'}).format(+n||0)}
async function gLoad(){try{S.gm=await api('g_members_list')||[]}catch(e){e.message&&toast(e.message)}}
function balPill(b){b=+b||0;return b>0?`<span class="pill red nodot">${esc(eur(b))}</span>`:b<0?`<span class="pill green nodot">${esc(t('credit'))} ${esc(eur(-b))}</span>`:`<span class="pill grey nodot">${esc(t('settled'))}</span>`}
function membersView(){const q=S.gQ.toLowerCase();
 let list=S.gm.filter(m=>!q||[m.name,m.email,m.phone].some(x=>(x||'').toLowerCase().includes(q)));
 const openN=S.gm.filter(m=>+m.balance>0).length;if(S.gOpen)list=list.filter(m=>+m.balance>0);
 const total=S.gm.reduce((a,m)=>a+Math.max(0,+m.balance||0),0);
 return `<div class="stats" style="margin-bottom:12px"><div class="stat"><div class="v" style="color:var(--red)">${esc(eur(total))}</div><div class="l">${esc(t('totalOpen'))}</div></div>
  <div class="stat"><div class="v">${openN}</div><div class="l">${esc(t('open2'))} · ${esc(t('members'))}</div></div></div>
 ${searchBox(S.gQ,"S.gQ=this.value;clearTimeout(window._gq);window._gq=setTimeout(()=>{render();const x=$('.search input');x.focus();x.setSelectionRange(x.value.length,x.value.length)},250)")}
 <div class="seg"><button class="${S.gOpen?'on':''}" onclick="S.gOpen=true;render()">${esc(t('open2'))}<span class="c">${openN}</span></button><button class="${S.gOpen?'':'on'}" onclick="S.gOpen=false;render()">${esc(t('allMembers'))}<span class="c">${S.gm.length}</span></button></div>
 ${list.length?`<div class="group">${list.map(m=>`<button class="cell ind" onclick="memberSheet(${m.id})"><span class="tile">${ic('user')}</span>
  <div class="grow"><div class="t1">${esc(m.name)}</div><div class="t2">${m.email?esc(m.email):`<span style="color:var(--amber)">${esc(t('noEmail'))}</span>`}</div></div>
  ${balPill(m.balance)}${ic('chev','s chev')}</button>`).join('')}</div>`
  :`<div class="empty">${ic('users')}${esc(S.gOpen&&S.gm.length?t('nobodyOpen'):t('noMembers'))}${S.gm.length?'':`<button class="btn sm" onclick="editMember()">${ic('plus','s')}${esc(t('newMember'))}</button>`}</div>`}`}
function editMember(id){const m=id?S.gm.find(x=>x.id===id):{name:'',email:'',phone:'',note:''};
 sheet(`${sheadX(esc(t(id?'editMember':'newMember')))}
 <label class="f">${esc(t('name'))}</label><input class="inp" id="gmName" value="${esc(m.name)}" maxlength="100">
 <label class="f">${esc(t('email'))}</label><input class="inp" id="gmEmail" type="email" inputmode="email" autocapitalize="none" value="${esc(m.email||'')}">
 <label class="f">${esc(t('phone'))}</label><input class="inp" id="gmPhone" type="tel" value="${esc(m.phone||'')}">
 <label class="f">${esc(t('memberNote'))}</label><input class="inp" id="gmNote" value="${esc(m.note||'')}">
 <div id="gmErr"></div>
 <button class="btn block" style="margin-top:20px" onclick="saveMember(${id||0})">${esc(t('save'))}</button>
 ${id?`<button class="btn danger block" style="margin-top:10px" onclick="delMember(${id})">${ic('trash','s')}${esc(t('del'))}</button>`:''}`)}
async function saveMember(id){const p={name:$('#gmName').value.trim(),email:$('#gmEmail').value.trim(),phone:$('#gmPhone').value.trim(),note:$('#gmNote').value.trim()};
 if(!p.name){$('#gmName').focus();return}if(id)p.id=id;
 try{const nid=await api('g_member_save',{p});closeSheet();toast(t('saved'));await gLoad();render();if(!id)memberSheet(nid)}
 catch(e){$('#gmErr').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function delMember(id){if(!confirm(t('delMemberQ')))return;try{await api('g_member_delete',{p_id:id});closeSheet();await gLoad();render()}catch(e){toast(e.message)}}
async function memberSheet(id){const m=S.gm.find(x=>x.id===id);if(!m)return;
 const bg=sheet(`<div class="shead"><div class="grow"><h3 style="font-size:19px">${esc(m.name)}</h3><div class="mute" style="margin-top:3px">${m.email?esc(m.email):esc(t('noEmail'))}${m.phone?' · '+esc(m.phone):''}</div></div>
  <button class="xbtn" onclick="editMember(${id})" aria-label="${esc(t('editMember'))}">${ic('edit')}</button><button class="xbtn" onclick="closeSheet()">${ic('x')}</button></div>
 <div class="card" style="margin-top:10px;display:flex;align-items:center;gap:12px"><div class="grow"><div class="mute">${esc(t('balance'))}</div><div style="font-size:26px;font-weight:600;letter-spacing:-.02em;color:${+m.balance>0?'var(--red)':'var(--green)'}">${esc(eur(Math.abs(+m.balance)))}${+m.balance<0?` <span class="mute">${esc(t('credit'))}</span>`:''}</div></div>
  ${m.last_mail?`<div class="mute" style="text-align:end;font-size:12.5px">${esc(t('lastMail'))}<br>${esc(fmt(m.last_mail,{day:'2-digit',month:'2-digit',year:'2-digit'}))}</div>`:''}</div>
 <div class="row" style="gap:8px"><button class="btn grow" onclick="entryForm(${id},'charge')">${ic('plus','s')}${esc(t('addCharge'))}</button><button class="btn ok grow" onclick="entryForm(${id},'payment')">${ic('check','s')}${esc(t('addPayment'))}</button></div>
 <button class="btn ghost block" id="sendOneBtn" style="margin-top:8px" onclick="sendOne(${id})" ${m.email&&+m.balance>0?'':'disabled'}>${ic('mail','s')}${esc(t('sendOne'))}</button>
 ${!m.email?`<div class="mute" style="font-size:12.5px;text-align:center;margin-top:4px">${esc(t('noEmailErr'))}</div>`:+m.balance>0?'':`<div class="mute" style="font-size:12.5px;text-align:center;margin-top:4px">${esc(t('noBalance'))}</div>`}
 <div id="geForm"></div>
 <div class="sec">${esc(t('history2'))}</div><div id="geList"><div class="mute" style="padding:6px">…</div></div>`);
 try{const es=await api('g_entries_list',{p_member:id})||[];const el=bg.querySelector('#geList');if(!el)return;
  el.innerHTML=es.length?`<div class="group">${es.map(e=>`<div class="cell"><div class="grow"><div class="t1" style="font-weight:500">${esc(e.what||t(e.kind))}</div>
   <div class="t2">${esc(fmt(e.on_date,{day:'2-digit',month:'2-digit',year:'numeric'}))} · ${esc(e.by_name)}</div></div>
   <div class="qty" style="font-size:16px;color:${e.kind==='charge'?'var(--red)':'var(--green)'}">${e.kind==='charge'?'':'− '}${esc(eur(e.amount))}</div>
   <button class="xbtn" style="width:28px;height:28px" onclick="delEntry(${e.id},${id})" aria-label="${esc(t('del'))}">${ic('x','s')}</button></div>`).join('')}</div>`
   :`<div class="mute" style="padding:4px 6px">${esc(t('noEntries'))}</div>`}catch(e){toast(e.message)}}
function entryForm(id,kind){const el=$('#geForm');if(!el)return;
 el.innerHTML=`<div class="card" style="margin-top:12px"><b>${esc(t(kind==='charge'?'addCharge':'addPayment'))}</b>
  <div class="row"><div class="grow"><label class="f">${esc(t(kind))} (€)</label><input class="inp" id="geAmt" type="text" inputmode="decimal" placeholder="0,00"></div>
  <div class="grow"><label class="f">${esc(t('date'))}</label><input class="inp" id="geDate" type="date" value="${isoDay(new Date())}"></div></div>
  <label class="f">${esc(t(kind==='charge'?'what':'payWhat'))}</label><input class="inp" id="geWhat" maxlength="200">
  ${kind==='payment'&&(S.gm.find(x=>x.id===id)||{}).email?`<label class="row" style="margin-top:12px;font-size:14px;color:var(--ink2)"><input type="checkbox" id="geConf" checked> ${esc(t('confirmMail'))}</label>`:''}
  <div id="geErr"></div>
  <button class="btn ${kind==='charge'?'':'ok'} block" style="margin-top:14px" onclick="saveEntry(${id},'${kind}')">${esc(t('save'))}</button></div>`;
 $('#geAmt').focus()}
async function saveEntry(id,kind){const sb=document.querySelector('#geForm .btn');if(sb&&sb.disabled)return;const amt=parseFloat(($('#geAmt').value||'').replace(/\s/g,'').replace(/\.(?=\d{3}(\D|$))/g,'').replace(',','.'));
 if(!(amt>0)){$('#geErr').innerHTML=`<div class="err">${esc(t('badAmount'))}</div>`;return}
 if(sb)sb.disabled=true;
 try{const eid=await api('g_entry_add',{p_member:id,p_kind:kind,p_amount:Math.round(amt*100)/100,p_what:$('#geWhat').value.trim(),p_date:$('#geDate').value||null});
  if(kind==='payment'&&$('#geConf')&&$('#geConf').checked){try{await api('g_confirm_payment',{p_entry:eid});toast(t('confirmSent'))}catch(e){toast(e.message)}}else toast(t('saved'));
  S.gMails=null;await gLoad();render();memberSheet(id)}
 catch(e){if(sb)sb.disabled=false;$('#geErr').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function sendOne(id){const m=S.gm.find(x=>x.id===id);const b=$('#sendOneBtn');if(!m||!b||b.disabled)return;
 if(!confirm(`${t('sendOneQ')}: ${m.email} (${eur(m.balance)})?`))return;b.disabled=true;
 try{await api('g_send_one',{p_member:id});toast(t('mailSent'));S.gMails=null;await gLoad()}catch(e){toast(e.message)}
 setTimeout(()=>{const x=$('#sendOneBtn');if(x)x.disabled=false},5000)}
async function delMail(id){if(!confirm(t('delMailQ')))return;try{await api('g_mail_delete',{p_id:id});S.gMails=(S.gMails||[]).filter(x=>x.id!==id);await gLoad();render()}catch(e){toast(e.message)}}
async function delEntry(eid,id){if(!confirm(t('delEntryQ')))return;try{await api('g_entry_delete',{p_id:eid});await gLoad();render();memberSheet(id)}catch(e){toast(e.message)}}
function mailsView(){
 if(S.gMails===null){api('g_mails_list').then(r=>{S.gMails=r||[];if(S.tab==='mails')render()}).catch(e=>{S.gMails=[];toast(e.message)});return `<div class="empty">…</div>`}
 const ST={sent:['stSent','green'],pending:['stPending','amber'],error:['stError','red'],unknown:['stUnknown','grey']},K={monthly:'kMonthly',manual:'kManual',test:'kTest',confirm:'kConfirm'};
 const openN=S.gm.filter(m=>+m.balance>0&&m.email).length;
 return `<div class="card mute" style="line-height:1.5">${ic('clock','s')} ${esc(t('autoInfo'))}</div>
 <button class="btn block" onclick="sendNow()" ${openN?'':'disabled'}>${ic('mail','s')}${esc(t('sendNow'))} (${openN})</button>
 <div class="sec">${ic('mail','s')}${esc(t('mailLog'))}<span class="n"><button class="xbtn" style="width:28px;height:28px" onclick="S.gMails=null;render()">${ic('refresh','s')}</button></span></div>
 ${S.gMails.length?`<div class="group">${S.gMails.map(x=>{const [l,c]=ST[x.status]||ST.unknown;return `<div class="cell"><div class="grow"><div class="t1">${esc(x.name||x.email)}</div>
  <div class="t2">${esc(fmt(x.at))} · ${esc(t(K[x.kind]||'kManual'))}${x.amount?' · '+esc(eur(x.amount)):''}${x.name?' · '+esc(x.email):''}</div>${x.info?`<div class="t2" style="color:var(--red)">${esc(x.info)}</div>`:''}</div>
  <span class="pill ${c}">${esc(t(l))}</span><button class="xbtn" style="width:28px;height:28px" onclick="delMail(${x.id})" aria-label="${esc(t('del'))}">${ic('x','s')}</button></div>`}).join('')}</div>`:`<div class="empty">${ic('mail')}${esc(t('noMails'))}</div>`}`}
let _sending=false;
async function sendNow(){if(_sending)return;const n=S.gm.filter(m=>+m.balance>0&&m.email).length;if(!n){toast(t('nobodyOpen'));return}
 if(!confirm(`${t('sendNowQ')} (${n})?`))return;
 _sending=true;try{const c=await api('g_send_now');toast(`${c} ${t('sentN')}`);S.gMails=null;await gLoad();setTimeout(()=>{S.gMails=null;if(S.tab==='mails')render()},4000);render()}catch(e){toast(e.message)}finally{setTimeout(()=>{_sending=false},5000)}}
function gSettingsCard(){if(!S.gSet){api('g_settings').then(r=>{S.gSet=r;if(S.tab==='settings')render()}).catch(e=>toast(e.message));return `<div class="empty">…</div>`}
 const g=S.gSet;return `<div class="sec">${ic('mail','s')}${esc(t('mailSettings'))}</div><div class="card">
  ${g.has_key?`<span class="pill green">${esc(t('keyOk'))}</span>`:`<div class="err" style="margin:0">${esc(t('keyMissing'))}</div>`}
  <label class="f">${esc(t('fromName'))}</label><input class="inp" id="gsName" value="${esc(g.from_name||'')}">
  <label class="f">${esc(t('fromEmail'))}</label><input class="inp" id="gsFrom" type="email" autocapitalize="none" value="${esc(g.from_email||'')}">
  <label class="f">${esc(t('payInfo'))}</label><textarea class="inp" id="gsPay" placeholder="Bitte überweisen an: IBAN AT00 0000 0000 0000 0000, Synagoge Tempelgasse 7">${esc(g.pay_info||'')}</textarea>
  <label class="row" style="margin-top:12px;font-size:14px;color:var(--ink2)"><input type="checkbox" id="gsMon" ${g.monthly?'checked':''}> ${esc(t('monthlyOn'))}</label>
  <div id="gsMsg"></div><button class="btn block" style="margin-top:14px" onclick="saveGSettings()">${esc(t('save'))}</button>
  <label class="f" style="margin-top:20px">${esc(t('testMail'))}</label><div class="row"><input class="inp grow" id="gsTest" type="email" autocapitalize="none" value="${esc(g.from_email||'')}"><button class="btn soft" id="gsTestBtn" onclick="sendTest()">${esc(t('sendTest'))}</button></div>
  <div id="gtMsg"></div></div>`}
async function saveGSettings(){const p={provider:'brevo',from_name:$('#gsName').value,from_email:$('#gsFrom').value,pay_info:$('#gsPay').value,monthly:$('#gsMon').checked};
 try{await api('g_settings_save',{p});S.gSet=Object.assign(S.gSet,p);$('#gsMsg').innerHTML=`<div class="okmsg">${esc(t('saved'))}</div>`}catch(e){$('#gsMsg').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function sendTest(){const b=$('#gsTestBtn');if(b.disabled)return;b.disabled=true;
 try{await api('g_send_test',{p_to:$('#gsTest').value.trim()});$('#gtMsg').innerHTML=`<div class="okmsg">${esc(t('testSent'))}</div>`}catch(e){$('#gtMsg').innerHTML=`<div class="err">${esc(e.message)}</div>`}
 setTimeout(()=>{b.disabled=false},5000)}

/* ---------------- Mehr / Einstellungen ---------------- */
function settingsView(){const mgr=S.me.role==='manager';return `
 ${mgr?`<div class="sec">${ic('key','s')}${esc(t('staffPass'))}</div><div class="card">${S.me.has_pass?'':`<div class="err" style="margin:0 0 10px">${esc(t('noPassYet'))}</div>`}
  <div class="mute">${esc(t('staffPassHint'))}</div>
  <label class="f">${esc(t('newPass'))}</label><input class="inp" id="spPass" type="text" autocomplete="off" autocapitalize="none">
  <label class="row" style="margin-top:12px;font-size:14px;color:var(--ink2)"><input type="checkbox" id="spKick"> ${esc(t('kick'))}</label>
  <div id="spMsg"></div><button class="btn block" style="margin-top:14px" onclick="setStaffPass()">${esc(t('setPass'))}</button></div>
 <div class="sec">${ic('lock','s')}${esc(t('mgrLogin'))}</div><div class="card">
  <label class="f" style="margin-top:0">${esc(t('newCode'))}</label>${pw(`<input class="inp" id="mlPass" type="password" inputmode="numeric" autocomplete="new-password">`)}
  <div id="mlMsg"></div><button class="btn block" style="margin-top:14px" onclick="setMgrLogin()">${esc(t('save'))}</button></div>
 <div class="sec">${ic('users','s')}${esc(t('gabbaiPass'))}</div><div class="card"><div id="gpState" class="mute" style="margin-bottom:6px"></div>
  <div class="mute">${esc(t('gabbaiHint'))}</div>
  <label class="f">${esc(t('newCode'))}</label>${pw(`<input class="inp" id="gpPass" type="password" autocomplete="new-password" autocapitalize="none">`)}
  <div id="gpMsg"></div><button class="btn block" style="margin-top:14px" onclick="setGabbaiPass()">${esc(t('save'))}</button></div>`:''}
 ${S.me.role==='gabbai'?gSettingsCard():''}
 ${NATIVE?'':`<div class="sec">${ic('phone','s')}${esc(t('install'))}</div><div class="card mute" style="line-height:1.55">${esc(t('installHint'))}</div>`}
 <button class="btn danger block" style="margin-top:18px" onclick="logout()">${ic('logout','s')}${esc(t('logout'))}</button>
 <p class="mute" style="text-align:center;margin-top:22px;font-size:12px;letter-spacing:.08em">TEMPELGASSE 7 · TEAM · V1</p>`}
async function setGabbaiPass(){const p=$('#gpPass').value;
 try{await api('g_set_pass',{p_pass:p});$('#gpPass').value='';$('#gpMsg').innerHTML=`<div class="okmsg">${esc(t('saved'))}</div>`;gpState()}
 catch(e){$('#gpMsg').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function gpState(){const el=$('#gpState');if(!el)return;try{const h=await api('g_has_pass');el.innerHTML=h?`<span class="pill green">${esc(t('gabbaiSet'))}</span>`:`<span class="pill amber">${esc(t('gabbaiNotSet'))}</span>`}catch(e){}}
async function setMgrLogin(){const u='admin',p=$('#mlPass').value;
 try{await api('ops_set_manager_login',{p_user:u,p_pass:p});$('#mlPass').value='';$('#mlMsg').innerHTML=`<div class="okmsg">${esc(t('saved'))}</div>`}
 catch(e){$('#mlMsg').innerHTML=`<div class="err">${esc(e.message)}</div>`}}
async function setStaffPass(){const p=$('#spPass').value.trim();
 try{await api('ops_set_staff_pass',{p_pass:p,p_kick:$('#spKick').checked});S.me.has_pass=true;$('#spPass').value='';$('#spMsg').innerHTML=`<div class="okmsg">${esc(t('saved'))}</div>`}
 catch(e){$('#spMsg').innerHTML=`<div class="err">${esc(e.message)}</div>`}}

/* ---------------- Start ---------------- */
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
render();boot();
