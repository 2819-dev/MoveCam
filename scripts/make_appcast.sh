#!/usr/bin/env bash
# Writes a Sparkle appcast for one release to stdout.
#
# --minimum-autoupdate is the lowest installed build that may update silently.
# The release workflow passes the first build of the release's major version
# (e.g. 20000 for 2.x), so jumping to a new major version always asks first.
set -euo pipefail

while [ $# -gt 0 ]; do
  case "$1" in
    --version) VERSION="$2"; shift 2 ;;
    --build) BUILD="$2"; shift 2 ;;
    --minimum-autoupdate) MIN_AUTO="$2"; shift 2 ;;
    --url) URL="$2"; shift 2 ;;
    --signature) SIGNATURE="$2"; shift 2 ;;   # output of sign_update: sparkle:edSignature="..." length="..."
    --notes-url) NOTES="$2"; shift 2 ;;
    *) echo "Unknown option $1" >&2; exit 1 ;;
  esac
done

PUB_DATE=$(LC_ALL=C date -u "+%a, %d %b %Y %H:%M:%S +0000")

cat <<XML
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
  <channel>
    <title>MoveCam</title>
    <item>
      <title>MoveCam ${VERSION}</title>
      <pubDate>${PUB_DATE}</pubDate>
      <sparkle:version>${BUILD}</sparkle:version>
      <sparkle:shortVersionString>${VERSION}</sparkle:shortVersionString>
      <sparkle:minimumSystemVersion>14.0</sparkle:minimumSystemVersion>
      <sparkle:minimumAutoupdateVersion>${MIN_AUTO}</sparkle:minimumAutoupdateVersion>
      <sparkle:releaseNotesLink>${NOTES}</sparkle:releaseNotesLink>
      <enclosure url="${URL}" ${SIGNATURE} type="application/octet-stream"/>
    </item>
  </channel>
</rss>
XML
