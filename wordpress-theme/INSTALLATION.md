# WordPress Theme Installation Guide

## Quick Start

Follow these steps to install the MultiMian Studio WordPress theme:

### Step 1: Download Theme

1. Go to: https://github.com/Mianhassam96/MultiMian-Studio
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Locate the `wordpress-theme` folder

### Step 2: Prepare Theme

1. Rename `wordpress-theme` folder to `multimian-studio`
2. Create a ZIP file of the `multimian-studio` folder
   - Right-click folder → Send to → Compressed (zipped) folder
   - Or use: `zip -r multimian-studio.zip multimian-studio/`

### Step 3: Upload to WordPress

**Method 1: WordPress Admin (Recommended)**
1. Login to WordPress admin panel
2. Go to **Appearance** → **Themes**
3. Click **Add New** → **Upload Theme**
4. Choose `multimian-studio.zip`
5. Click **Install Now**
6. Click **Activate**

**Method 2: FTP/File Manager**
1. Connect via FTP or use cPanel File Manager
2. Navigate to `/wp-content/themes/`
3. Upload the `multimian-studio` folder
4. Go to WordPress admin → **Appearance** → **Themes**
5. Find "MultiMian Studio" and click **Activate**

### Step 4: Create Required Pages

Create these pages in WordPress:

1. **Home Page**
   - Title: "Home"
   - Template: Default
   - Set as Front Page: Settings → Reading → Front page displays → A static page → Front page: Home

2. **Login Page**
   - Title: "Login"
   - Template: **Login Page**
   - Slug: `login`

3. **Signup Page**
   - Title: "Sign Up"
   - Template: **Signup Page**
   - Slug: `signup`

4. **Other Pages** (use default template):
   - Dashboard
   - Contact
   - Portfolio
   - Services
   - About
   - Pricing
   - Process
   - Testimonials
   - FAQ

### Step 5: Configure Navigation Menu

1. Go to **Appearance** → **Menus**
2. Create a new menu called "Primary Menu"
3. Add pages in this order:
   - Home
   - Services (with sub-menu items if needed)
   - Portfolio
   - Process
   - Pricing
   - About
   - Contact
4. Check "Primary Menu" under Menu Settings
5. Click **Save Menu**

### Step 6: Customize Theme Settings

1. Go to **Appearance** → **Customize**

2. **Social Media Section:**
   - Facebook URL: `https://facebook.com/yourpage`
   - LinkedIn URL: `https://linkedin.com/in/yourprofile`
   - GitHub URL: `https://github.com/yourusername`
   - WhatsApp Number: `1234567890` (without +)

3. **Contact Information:**
   - Phone Number: `+1 234 567 8900`
   - Email Address: `your@email.com`
   - Address: `Your business address`

4. **Site Identity:**
   - Upload logo (optional)
   - Set site title and tagline

5. Click **Publish**

### Step 7: Configure Permalinks

1. Go to **Settings** → **Permalinks**
2. Select **Post name**
3. Click **Save Changes**

### Step 8: Test Features

Test these features:

✅ Home page loads correctly
✅ Navigation menu works
✅ Mobile menu toggles
✅ Dark mode toggle works
✅ Login page accessible at `/login`
✅ Signup page accessible at `/signup`
✅ Contact form (if added)
✅ Newsletter form in footer
✅ All links work

## Troubleshooting

### Theme Not Showing Up

**Problem:** Theme doesn't appear in Themes list

**Solution:**
- Ensure folder is named `multimian-studio`
- Check that `style.css` is in the root of theme folder
- Verify file permissions (755 for folders, 644 for files)

### Styles Not Loading

**Problem:** Theme looks broken or unstyled

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Clear WordPress cache (if using caching plugin)
3. Go to **Appearance** → **Customize** and click **Publish**
4. Check browser console for errors (F12)

### Login/Signup Not Working

**Problem:** Forms don't submit or show errors

**Solution:**
1. Ensure pages use correct templates:
   - Login page → "Login Page" template
   - Signup page → "Signup Page" template
2. Check that jQuery is loaded
3. Clear browser cache
4. Check browser console for JavaScript errors

### Menu Not Displaying

**Problem:** Navigation menu is empty

**Solution:**
1. Go to **Appearance** → **Menus**
2. Ensure menu is assigned to "Primary Menu" location
3. Add pages to the menu
4. Save menu

### Dark Mode Not Working

**Problem:** Theme toggle doesn't switch modes

**Solution:**
1. Clear browser cache
2. Check browser console for errors
3. Ensure JavaScript file is loaded
4. Try in incognito/private browsing mode

## Advanced Configuration

### Custom Colors

Edit `wordpress-theme/style.css`:

```css
:root {
  --primary: #2563eb;        /* Change primary color */
  --primary-dark: #1e40af;   /* Change dark primary */
  --secondary: #8b5cf6;      /* Change secondary color */
}
```

### Add Custom CSS

1. Go to **Appearance** → **Customize**
2. Click **Additional CSS**
3. Add your custom CSS
4. Click **Publish**

### Add Custom JavaScript

1. Create child theme (recommended)
2. Or edit `wordpress-theme/assets/js/main.js`

### Custom Post Types

The theme includes:
- **Portfolio** - Add at Posts → Portfolio
- **Services** - Add at Posts → Services
- **Testimonials** - Add at Posts → Testimonials

## Support

Need help? Contact:
- Email: mianhassam96@gmail.com
- GitHub: https://github.com/Mianhassam96/MultiMian-Studio/issues

## Next Steps

After installation:

1. ✅ Add your content to pages
2. ✅ Upload portfolio items
3. ✅ Add services
4. ✅ Add testimonials
5. ✅ Configure contact form
6. ✅ Test all features
7. ✅ Optimize images
8. ✅ Install security plugins
9. ✅ Set up backups
10. ✅ Launch your site!

## Recommended Plugins

- **Yoast SEO** - SEO optimization
- **Contact Form 7** - Advanced contact forms
- **Wordfence Security** - Security
- **WP Super Cache** - Caching
- **Akismet** - Spam protection

## Updates

Check for theme updates at:
https://github.com/Mianhassam96/MultiMian-Studio

---

**Theme Version:** 1.0.0  
**Last Updated:** February 19, 2026  
**Author:** Mian Hassam
