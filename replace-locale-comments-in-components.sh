#!/bin/bash

VIEWS_DIR2="src/components"

# Parcourt tous les fichiers .jsx dans views
find "$VIEWS_DIR2" -type f -name "*.jsx" | while read -r file; do
  sed -i.bak -E \
    "s/\{[[:space:]]*\/\*[[:space:]]*locale-([A-Za-z0-9_-]+)[[:space:]]*\*\/[[:space:]]*\}/\{t('\1')\}/g" \
    "$file"
done

echo "✅ Remplacement terminé dans $VIEWS_DIR2"
echo "🗂️   Backups créés avec extension .bak"
