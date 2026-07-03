/**
 * Favicon generator — creates all PNG sizes from the SVG favicon
 * using the `sharp` package (install with: npm install sharp --save-dev)
 * Run: node scripts/gen-favicon.mjs
 */
import { createRequire } from 'module'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

let sharp
try {
  const require = createRequire(import.meta.url)
  sharp = require('sharp')
} catch {
  console.log('⚠  sharp not found. Falling back to inline base64 PNG generation.')
  sharp = null
}

const SVG_PATH   = resolve(root, 'public/favicon.svg')
const svgBuffer  = readFileSync(SVG_PATH)

const SIZES = [
  { name: 'favicon-16x16.png',          size: 16  },
  { name: 'favicon-32x32.png',          size: 32  },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png',       size: 180 },
]

if (sharp) {
  console.log('✅ Using sharp for favicon generation...')
  for (const { name, size } of SIZES) {
    const out = resolve(root, 'public', name)
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(out)
    console.log(`   ✔ ${name} (${size}×${size})`)
  }
  console.log('\n🎉 All favicons generated successfully!')
} else {
  console.log('ℹ  SVG favicon is ready at public/favicon.svg')
  console.log('   Browsers that support SVG favicons will use it directly.')
  console.log('   For PNG fallbacks run: npm install sharp --save-dev && node scripts/gen-favicon.mjs')
}
