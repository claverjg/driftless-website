#!/bin/bash
set -euo pipefail

REPOPATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOYPATH="${DEPLOYPATH:-$HOME/public_html}"

cd "$REPOPATH"

if [ -n "${NPM_BIN:-}" ]; then
  npm_bin="$NPM_BIN"
elif command -v npm >/dev/null 2>&1; then
  npm_bin="$(command -v npm)"
else
  npm_bin="$(
    {
      find "$HOME/nodevenv" -path '*/bin/npm' -type f 2>/dev/null
      find /opt/cpanel /opt/alt /usr/local /usr -path '*/bin/npm' -type f 2>/dev/null
    } | sort -V | tail -n 1 || true
  )"
fi

if [ -z "${npm_bin:-}" ]; then
  echo "npm was not found. Enable Node.js/npm in cPanel or set NPM_BIN." >&2
  exit 1
fi

"$npm_bin" ci
"$npm_bin" run build

mkdir -p "$DEPLOYPATH"

rm -rf "$DEPLOYPATH/_next" "$DEPLOYPATH/_not-found"
rm -f \
  "$DEPLOYPATH/index.html" \
  "$DEPLOYPATH/404.html" \
  "$DEPLOYPATH/_not-found.html" \
  "$DEPLOYPATH/index.txt" \
  "$DEPLOYPATH/_not-found.txt" \
  "$DEPLOYPATH/__next._full.txt" \
  "$DEPLOYPATH/__next._head.txt" \
  "$DEPLOYPATH/__next._index.txt" \
  "$DEPLOYPATH/__next._tree.txt" \
  "$DEPLOYPATH/__next.__PAGE__.txt"

cp -a out/. "$DEPLOYPATH"/

echo "Deployed Driftless static export to $DEPLOYPATH"
