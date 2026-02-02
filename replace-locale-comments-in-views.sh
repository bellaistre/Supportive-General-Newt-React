#!/bin/bash

VIEWS_DIR="src/views"

# Parcourt tous les fichiers .jsx dans views
find "$VIEWS_DIR" -type f -name "*.jsx" | while read -r file; do
  sed -i.bak -E \
    "s/\{[[:space:]]*\/\*[[:space:]]*locale-([A-Za-z0-9_-]+)[[:space:]]*\*\/[[:space:]]*\}/\{t('\1')\}/g" \
    "$file"
done

echo "✅ Remplacement terminé dans $VIEWS_DIR"
echo "🗂️  Backups créés avec extension .bak
