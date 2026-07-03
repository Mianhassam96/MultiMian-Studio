/**
 * Pure-Node favicon PNG generator (no external deps needed)
 * Creates pixel-perfect favicon PNGs that match the site's design system:
 *   - Deep blue gradient (#2563eb → #06b6d4)
 *   - "M" lettermark in white
 *   - Rounded square shape
 *   - Matching the site's primary color token
 */
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import zlib from 'zlib'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// ─── CRC32 ────────────────────────────────────────────────────────────────────
function crc32(buf) {
  const table = (() => {
    const t = new Uint32Array(256)
    for (let i = 0; i < 256; i++) {
      let c = i
      for (let j = 0; j < 8; j++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      t[i] = c
    }
    return t
  })()
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length)
  const typeB = Buffer.from(type)
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeB, data])))
  return Buffer.concat([len, typeB, data, crcBuf])
}

// ─── PNG encoder ──────────────────────────────────────────────────────────────
function encodePNG(pixels, width, height) {
  // pixels: Uint8Array of RGBA values, row-major
  // Build raw scanlines with filter byte 0
  const scanlines = Buffer.alloc(height * (1 + width * 4))
  for (let y = 0; y < height; y++) {
    scanlines[y * (1 + width * 4)] = 0 // filter None
    for (let x = 0; x < width; x++) {
      const si = (y * width + x) * 4
      const di = y * (1 + width * 4) + 1 + x * 4
      scanlines[di]     = pixels[si]
      scanlines[di + 1] = pixels[si + 1]
      scanlines[di + 2] = pixels[si + 2]
      scanlines[di + 3] = pixels[si + 3]
    }
  }
  const compressed = zlib.deflateSync(scanlines, { level: 9 })

  const IHDR_data = Buffer.alloc(13)
  IHDR_data.writeUInt32BE(width,  0)
  IHDR_data.writeUInt32BE(height, 4)
  IHDR_data[8]  = 8   // bit depth
  IHDR_data[9]  = 6   // RGBA
  IHDR_data[10] = 0   // compression
  IHDR_data[11] = 0   // filter
  IHDR_data[12] = 0   // interlace

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), // PNG sig
    chunk('IHDR', IHDR_data),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

// ─── Drawing helpers ──────────────────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t }

function setPixel(pixels, w, x, y, r, g, b, a) {
  if (x < 0 || x >= w || y < 0 || y >= w) return
  const i = (y * w + x) * 4
  // Alpha compositing over existing pixel
  const srcA = a / 255
  const dstA = pixels[i + 3] / 255
  const outA = srcA + dstA * (1 - srcA)
  if (outA === 0) return
  pixels[i]     = Math.round((r * srcA + pixels[i]     * dstA * (1 - srcA)) / outA)
  pixels[i + 1] = Math.round((g * srcA + pixels[i + 1] * dstA * (1 - srcA)) / outA)
  pixels[i + 2] = Math.round((b * srcA + pixels[i + 2] * dstA * (1 - srcA)) / outA)
  pixels[i + 3] = Math.round(outA * 255)
}

// Anti-aliased circle fill test (returns coverage 0–1)
function circleCoverage(px, py, cx, cy, r) {
  const dx = px - cx, dy = py - cy
  const dist = Math.sqrt(dx * dx + dy * dy)
  return Math.max(0, Math.min(1, r + 0.5 - dist))
}

// Rounded rectangle pixel test with AA
function roundRectCoverage(px, py, x, y, w, h, r) {
  const right = x + w, bottom = y + h
  // corners
  const corners = [
    [x + r, y + r],
    [right - r, y + r],
    [right - r, bottom - r],
    [x + r, bottom - r],
  ]
  if (px >= x + r && px <= right - r) {
    // top/bottom strips
    if (py >= y && py <= bottom) {
      const edgeT = y + 0.5 - py
      const edgeB = py - (bottom - 0.5)
      return Math.max(0, Math.min(1, Math.min(1, 1 + edgeT, 1 + edgeB)))
    }
  }
  if (py >= y + r && py <= bottom - r) {
    if (px >= x && px <= right) {
      const edgeL = x + 0.5 - px
      const edgeR = px - (right - 0.5)
      return Math.max(0, Math.min(1, Math.min(1, 1 + edgeL, 1 + edgeR)))
    }
  }
  for (const [cx, cy] of corners) {
    if ((px <= cx || corners.indexOf([cx,cy]) % 2 === 0 ? px <= cx : px >= cx) &&
        (py <= cy || corners.indexOf([cx,cy]) > 1 ? py >= cy : py <= cy)) {
      return circleCoverage(px, py, cx, cy, r)
    }
  }
  // simple inside check
  const inside =
    px >= x && px <= right && py >= y && py <= bottom &&
    !( (px < x+r && py < y+r && (px-x-r)**2+(py-y-r)**2 > r*r) ||
       (px > right-r && py < y+r && (px-right+r)**2+(py-y-r)**2 > r*r) ||
       (px < x+r && py > bottom-r && (px-x-r)**2+(py-bottom+r)**2 > r*r) ||
       (px > right-r && py > bottom-r && (px-right+r)**2+(py-bottom+r)**2 > r*r) )
  return inside ? 1 : 0
}

// ─── Main renderer ────────────────────────────────────────────────────────────
function renderFavicon(size) {
  const pixels = new Uint8Array(size * size * 4) // transparent
  const radius = size * 0.22  // rounded corner radius

  // Gradient colours: #2563eb → #06b6d4
  const c1 = [0x25, 0x63, 0xeb]
  const c2 = [0x06, 0xb6, 0xd4]

  // ── Background rounded rect with gradient ──────────────────────────────────
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const t = (x + y) / (2 * (size - 1))   // diagonal gradient
      const r = Math.round(lerp(c1[0], c2[0], t))
      const g = Math.round(lerp(c1[1], c2[1], t))
      const b = Math.round(lerp(c1[2], c2[2], t))

      // Smooth anti-aliased rounded rect coverage
      const cover = roundRectCoverage(x + 0.5, y + 0.5, 0.5, 0.5, size - 1, size - 1, radius)
      if (cover > 0) {
        setPixel(pixels, size, x, y, r, g, b, Math.round(cover * 255))
      }
    }
  }

  // ── Inner stroke / glow ────────────────────────────────────────────────────
  const strokeWidth = Math.max(1, size * 0.025)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const outer = roundRectCoverage(x + 0.5, y + 0.5, 0.5, 0.5, size - 1, size - 1, radius)
      const inner = roundRectCoverage(x + 0.5, y + 0.5, 0.5 + strokeWidth, 0.5 + strokeWidth, size - 1 - strokeWidth*2, size - 1 - strokeWidth*2, Math.max(0, radius - strokeWidth))
      const ring = Math.max(0, outer - inner)
      if (ring > 0) {
        setPixel(pixels, size, x, y, 255, 255, 255, Math.round(ring * 60))
      }
    }
  }

  // ── "M" lettermark ─────────────────────────────────────────────────────────
  // We draw a stylised "M" using filled rectangles/trapezoids for sharpness
  // Scale factor
  const s = size / 64

  // Stroke weight scales with icon size (but min 1px)
  const sw  = Math.max(1, Math.round(5 * s))   // stroke width
  const top = Math.round(14 * s)
  const bot = Math.round(50 * s)
  const lx  = Math.round(12 * s)               // left x
  const rx  = Math.round(52 * s)               // right x
  const mx  = Math.round(32 * s)               // mid x
  const midy = Math.round(34 * s)              // mid-V y

  function drawRect(x1, y1, x2, y2, alpha = 255) {
    for (let py = Math.round(y1); py < Math.round(y2); py++) {
      for (let px = Math.round(x1); px < Math.round(x2); px++) {
        setPixel(pixels, size, px, py, 255, 255, 255, alpha)
      }
    }
  }

  // Left vertical bar
  drawRect(lx, top, lx + sw, bot)
  // Right vertical bar
  drawRect(rx - sw, top, rx, bot)

  // Left diagonal (top-left → mid-bottom)
  const steps = Math.round((midy - top) / s) * 3
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const cx = lx + (mx - lx) * t
    const cy = top + (midy - top) * t
    drawRect(cx - sw * 0.5, cy - sw * 0.5, cx + sw * 0.5, cy + sw * 0.5)
  }
  // Right diagonal (top-right → mid-bottom)
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const cx = rx - (rx - mx) * t
    const cy = top + (midy - top) * t
    drawRect(cx - sw * 0.5, cy - sw * 0.5, cx + sw * 0.5, cy + sw * 0.5)
  }

  // ── Bottom accent bar ──────────────────────────────────────────────────────
  if (size >= 32) {
    const barH = Math.max(1, Math.round(2.5 * s))
    const barY = size - Math.round(8 * s)
    const barX = Math.round(18 * s)
    const barW = Math.round(28 * s)
    drawRect(barX, barY, barX + barW, barY + barH, 100)
  }

  // ── Decorative dot ─────────────────────────────────────────────────────────
  if (size >= 48) {
    const dotX = Math.round(50 * s), dotY = Math.round(12 * s), dotR = Math.round(2.5 * s)
    for (let py = dotY - dotR - 1; py <= dotY + dotR + 1; py++) {
      for (let px = dotX - dotR - 1; px <= dotX + dotR + 1; px++) {
        const cov = circleCoverage(px + 0.5, py + 0.5, dotX, dotY, dotR)
        if (cov > 0) setPixel(pixels, size, px, py, 255, 255, 255, Math.round(cov * 90))
      }
    }
  }

  return pixels
}

// ─── Generate all sizes ───────────────────────────────────────────────────────
const SIZES = [
  { name: 'favicon-16x16.png',          size: 16  },
  { name: 'favicon-32x32.png',          size: 32  },
  { name: 'apple-touch-icon.png',       size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
]

for (const { name, size } of SIZES) {
  const pixels = renderFavicon(size)
  const png    = encodePNG(pixels, size, size)
  const out    = resolve(root, 'public', name)
  writeFileSync(out, png)
  console.log(`✔  ${name.padEnd(32)} (${size}×${size})`)
}

console.log('\n🎉 All favicon PNGs generated!')
