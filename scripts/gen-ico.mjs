/**
 * Creates favicon.ico from the pre-generated 16×16 and 32×32 PNGs.
 * ICO format: header + directory + PNG data (modern ICO supports PNG compression)
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const png16 = readFileSync(resolve(root, 'public/favicon-16x16.png'))
const png32 = readFileSync(resolve(root, 'public/favicon-32x32.png'))

const images = [
  { data: png16, size: 16 },
  { data: png32, size: 32 },
]

// ICO header: 6 bytes
const header = Buffer.alloc(6)
header.writeUInt16LE(0,               0) // reserved
header.writeUInt16LE(1,               2) // type: 1 = ICO
header.writeUInt16LE(images.length,   4) // count

// Directory entries: 16 bytes each
const DIR_ENTRY_SIZE = 16
const dataOffset = 6 + images.length * DIR_ENTRY_SIZE

const dirs = []
let offset = dataOffset
for (const img of images) {
  const entry = Buffer.alloc(DIR_ENTRY_SIZE)
  entry.writeUInt8(img.size === 256 ? 0 : img.size, 0)  // width (0 = 256)
  entry.writeUInt8(img.size === 256 ? 0 : img.size, 1)  // height
  entry.writeUInt8(0,              2)   // color count (0 for 24/32 bit)
  entry.writeUInt8(0,              3)   // reserved
  entry.writeUInt16LE(1,           4)   // color planes
  entry.writeUInt16LE(32,          6)   // bits per pixel
  entry.writeUInt32LE(img.data.length, 8) // size of image data
  entry.writeUInt32LE(offset,      12)  // offset to image data
  dirs.push(entry)
  offset += img.data.length
}

const icoBuffer = Buffer.concat([header, ...dirs, ...images.map(i => i.data)])
const out = resolve(root, 'public/favicon.ico')
writeFileSync(out, icoBuffer)
console.log(`✔  favicon.ico  (16×16 + 32×32 bundled, ${icoBuffer.length} bytes)`)
