#!/bin/bash

INPUT="src/locales/fr.json"
OUTPUT="src/locales/fr.clean.json"

sed \
  -e 's/<span>//g' \
  -e 's/<\/span>//g' \
  -e 's/\\n//g' \
  "$INPUT" > "$OUTPUT"

echo "✅ Nettoyage terminé → $OUTPUT"

INPUT="src/locales/en.json"
OUTPUT="src/locales/en.clean.json"

sed \
  -e 's/<span>//g' \
  -e 's/<\/span>//g' \
  -e 's/\\n//g' \
  "$INPUT" > "$OUTPUT"

echo "✅ Nettoyage terminé → $OUTPUT"
