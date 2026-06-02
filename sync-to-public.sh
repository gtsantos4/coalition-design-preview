#!/usr/bin/env bash
# Regenerate the public read-only site from the editable site, then commit and
# push it. The editable site is the single source of truth; this strips the
# inline-edit features and writes the result into the read-only repo.
#
# Strips exactly three things from each page (everything else, including the
# data-field attributes and the nav-toggle script, is preserved):
#   1. the <link ... assets/edit.css> stylesheet
#   2. the data-edit-page="..." attribute on <body>
#   3. the inline-edit toolbar block through the assets/edit.js <script>
#
# Usage: ./sync-to-public.sh ["commit message"]
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PUBLIC="$ROOT/Coalition Read Only"
PAGES=(index.html about.html contact.html members.html how-it-works.html)
MSG="${1:-Sync content from editable site}"

if [ ! -d "$PUBLIC/.git" ]; then
  echo "error: '$PUBLIC' is not a git repo" >&2
  exit 1
fi

for p in "${PAGES[@]}"; do
  perl -0777 -pe '
    s{^<link rel="stylesheet" href="assets/edit\.css"[^>]*>\n}{}m;
    s{<body data-edit-page="[^"]*">}{<body>};
    s{\n+<!-- Inline-edit toolbar -->.*?<script src="assets/edit\.js" defer></script>\n}{\n}s;
  ' "$ROOT/$p" > "$PUBLIC/$p"
  echo "synced $p"
done

# Sanity check: no edit features should survive in the public copy.
if grep -rlE 'assets/edit\.(js|css)|data-edit-page|id="edit-bar"' "$PUBLIC"/*.html >/dev/null 2>&1; then
  echo "error: edit features still present in public copy — aborting" >&2
  exit 1
fi

cd "$PUBLIC"
if git diff --quiet; then
  echo "public site already up to date — nothing to commit"
  exit 0
fi
git add "${PAGES[@]}"
git commit -m "$MSG"
git push origin HEAD
echo "public site pushed"
