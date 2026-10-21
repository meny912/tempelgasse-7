#!/bin/sh
# Rebuild index.html from src/app.js (CSS lives in index.html head). Run: sh build.sh
cd "$(dirname "$0")" && python3 - <<'PY'
s=open('index.html').read();js=open('src/app.js').read()
a=s.index('<script>\n')+9;b=s.rindex('</script>')
open('index.html','w').write(s[:a]+js+s[b:])
PY
