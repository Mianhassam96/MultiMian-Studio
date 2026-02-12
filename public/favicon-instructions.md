# Favicon Setup Instructions

## Required Files

To complete the favicon setup, save the logo image in the following formats:

### 1. Main Favicon
**Filename:** `favicon.ico`
**Location:** `/public/favicon.ico`
**Size:** 32x32px or 16x16px
**Format:** ICO file

### 2. PNG Favicon (Recommended)
**Filename:** `favicon.png`
**Location:** `/public/favicon.png`
**Size:** 512x512px
**Format:** PNG with transparent background

### 3. Apple Touch Icon
**Filename:** `apple-touch-icon.png`
**Location:** `/public/apple-touch-icon.png`
**Size:** 180x180px
**Format:** PNG

### 4. Android Chrome Icons
**Filenames:** 
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Location:** `/public/`
**Sizes:** 192x192px and 512x512px
**Format:** PNG

---

## How to Create These Files

1. **Save the logo image** (the blue/purple gradient code icon) to your computer
2. **Use an online converter** like:
   - https://favicon.io/favicon-converter/
   - https://realfavicongenerator.net/
3. **Upload the logo image** and generate all required sizes
4. **Download the generated files** and place them in the `/public/` folder

---

## Quick Setup (Minimum Required)

If you want to get started quickly, just create:
1. `favicon.ico` (32x32px) - Place in `/public/`
2. `favicon.png` (512x512px) - Place in `/public/`

The _app.tsx file is already configured to use these files!

---

## Current Configuration

The website is configured to look for:
- `/favicon.ico` - Standard favicon
- `/favicon.png` - High-res PNG version
- `/apple-touch-icon.png` - iOS devices
- `/android-chrome-192x192.png` - Android devices
- `/android-chrome-512x512.png` - Android devices (high-res)

All references are already set up in `pages/_app.tsx`!
