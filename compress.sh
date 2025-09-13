#!/bin/bash
# compress.sh — Batch compress images before committing

echo "🔄 Compressing images..."

# Compress PNGs with pngquant (lossy, keeps good quality)
if command -v pngquant &> /dev/null; then
  find . -type f -iname "*.png" -exec pngquant --quality=65-80 --ext .png --force {} \;
  echo "✅ PNG compression done"
else
  echo "⚠️ pngquant not installed (skip PNG compression)"
fi

# Compress JPGs with jpegoptim
if command -v jpegoptim &> /dev/null; then
  find . -type f -iname "*.jpg" -exec jpegoptim --max=80 {} \;
  echo "✅ JPG compression done"
else
  echo "⚠️ jpegoptim not installed (skip JPG compression)"
fi

# Optimize SVGs with svgo (requires Node.js)
if command -v svgo &> /dev/null; then
  find . -type f -iname "*.svg" -exec svgo {} \;
  echo "✅ SVG compression done"
else
  echo "⚠️ svgo not installed (skip SVG compression)"
fi

echo "🎉 All done! Commit your changes now."