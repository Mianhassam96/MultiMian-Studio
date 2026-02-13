# MultiMian Studio - WordPress Theme Installation Guide

## Quick Start (5 Minutes)

Follow these steps to get your website up and running quickly.

### Step 1: Install the Theme (2 minutes)

1. **Download the theme**
   - You should have a folder called `wordpress-theme` or `multimian-studio`

2. **Compress to ZIP** (if not already)
   - Right-click the theme folder
   - Select "Compress" or "Send to → Compressed folder"
   - Name it `multimian-studio.zip`

3. **Upload to WordPress**
   - Log in to your WordPress admin panel
   - Go to **Appearance → Themes**
   - Click **Add New** button
   - Click **Upload Theme** button
   - Click **Choose File** and select your ZIP file
   - Click **Install Now**
   - Click **Activate** when installation completes

### Step 2: Create Essential Pages (2 minutes)

Go to **Pages → Add New** and create these pages:

1. **Home Page**
   - Title: "Home"
   - Template: Select "Home Page" from Page Attributes
   - Publish

2. **Portfolio Page**
   - Title: "Portfolio"
   - Template: Select "Portfolio Page"
   - Publish

3. **Contact Page**
   - Title: "Contact"
   - Template: Select "Contact Page"
   - Publish

4. **Other Pages** (use default template)
   - Services
   - About
   - Pricing
   - Process
   - Testimonials
   - FAQ

### Step 3: Configure Settings (1 minute)

1. **Set Homepage**
   - Go to **Settings → Reading**
   - Select "A static page"
   - Homepage: Select "Home"
   - Click **Save Changes**

2. **Create Menu**
   - Go to **Appearance → Menus**
   - Create new menu: "Primary Menu"
   - Add pages: Home, Services, Portfolio, Process, Pricing, About, Contact
   - Check "Primary Menu" under Menu Settings
   - Click **Save Menu**

3. **Configure WhatsApp**
   - Go to **Appearance → Customize → WhatsApp Settings**
   - Enter your number: +923258831437 (or your number)
   - Click **Publish**

### Step 4: Add Portfolio Items (Optional)

1. Go to **Portfolio → Add New**
2. Add title and description
3. Set featured image
4. Fill in portfolio details:
   - Tagline: "Real-Time Weather Intelligence"
   - Impact: "200% more engagement"
   - Demo URL: https://your-demo-url.com
   - Technologies: "Next.js:frontend, React:frontend, Node.js:backend"
5. Assign category (create if needed)
6. Click **Publish**

---

## Detailed Setup Guide

### Theme Customization

#### 1. Logo and Branding

**Option A: Use Default Text Logo**
- The theme displays "MULTIMIAN" by default
- No action needed

**Option B: Upload Custom Logo**
1. Go to **Appearance → Customize → Site Identity**
2. Click **Select Logo**
3. Upload your logo image (recommended: 200x60px, PNG with transparency)
4. Click **Publish**

#### 2. Colors (Optional)

To change theme colors:

1. Go to your theme folder via FTP or File Manager
2. Edit `/assets/css/custom.css`
3. Find this section:
```css
:root {
    --color-primary: #2563EB;    /* Change this */
    --color-secondary: #7C3AED;  /* Change this */
    --color-navy: #0B1C2D;       /* Change this */
}
```
4. Replace with your brand colors
5. Save file

#### 3. Social Media Links

1. Go to **Appearance → Customize → Social Media Links**
2. Enter your URLs:
   - Facebook URL
   - Twitter URL
   - LinkedIn URL
   - Instagram URL
   - GitHub URL
3. Click **Publish**

### Content Setup

#### Adding Portfolio Projects

1. **Create Categories First**
   - Go to **Portfolio → Portfolio Categories**
   - Add categories:
     - Web Application
     - E-Commerce
     - Business Website
   - Click **Add New Category**

2. **Add Portfolio Item**
   - Go to **Portfolio → Add New**
   - Enter project title
   - Add description in the editor
   - Set featured image (recommended: 800x600px)
   
3. **Fill Portfolio Details**
   - **Tagline:** Short catchy phrase (e.g., "Real-Time Weather Intelligence")
   - **Impact Badge:** Result achieved (e.g., "200% more engagement")
   - **Demo URL:** Live project link
   - **Repository URL:** GitHub link (optional)
   - **Technologies:** Format: "Name:Type, Name:Type"
     - Types: frontend, backend, api, library, design
     - Example: "Next.js:frontend, Node.js:backend, Stripe:api"
   
4. **Assign Category**
   - Check the appropriate category on the right sidebar
   
5. **Publish**

#### Adding Testimonials

1. Go to **Testimonials → Add New**
2. Title: Client name
3. Content: Testimonial text
4. Featured Image: Client photo (optional)
5. Publish

### Menu Configuration

#### Primary Menu Setup

1. Go to **Appearance → Menus**
2. Create menu: "Primary Menu"
3. Add pages in this order:
   - Home
   - Services (with dropdown if you have service pages)
   - Portfolio
   - Process
   - Pricing
   - About
   - Contact
4. Drag to reorder
5. Check "Primary Menu" location
6. Save

#### Creating Dropdown Menus

1. Drag menu item slightly to the right under parent
2. This creates a dropdown
3. Example structure:
   ```
   Services
     ↳ Business Websites
     ↳ Web Applications
     ↳ E-Commerce
   ```

### Contact Form Setup

The contact form works automatically, but to ensure emails are delivered:

#### Option 1: Use WP Mail SMTP (Recommended)

1. Install **WP Mail SMTP** plugin
2. Go to **WP Mail SMTP → Settings**
3. Configure with your email provider:
   - Gmail
   - SendGrid
   - Mailgun
   - etc.
4. Test email delivery

#### Option 2: Use Default WordPress Mail

- Emails will be sent to the admin email
- Go to **Settings → General** to verify admin email
- Some hosts may block WordPress emails

### Performance Optimization

#### 1. Install Caching Plugin

Recommended: **WP Super Cache** or **W3 Total Cache**

1. Install plugin
2. Enable caching
3. Clear cache after theme changes

#### 2. Image Optimization

Recommended: **Smush** or **ShortPixel**

1. Install plugin
2. Optimize existing images
3. Enable automatic optimization

#### 3. Minify CSS/JS

Recommended: **Autoptimize**

1. Install plugin
2. Enable CSS optimization
3. Enable JavaScript optimization

### Troubleshooting

#### Portfolio Page Shows "No items found"

**Solution:**
1. Ensure you've created portfolio items
2. Check items are published (not draft)
3. Verify you're using "Portfolio Page" template
4. Go to **Settings → Permalinks** and click **Save Changes**

#### Contact Form Not Sending

**Solution:**
1. Install WP Mail SMTP plugin
2. Configure email settings
3. Test email delivery
4. Check spam folder

#### Dark Mode Not Working

**Solution:**
1. Clear browser cache
2. Check JavaScript is enabled
3. Try different browser
4. Ensure jQuery is loaded (check browser console)

#### Menu Not Showing

**Solution:**
1. Go to **Appearance → Menus**
2. Ensure menu is assigned to "Primary Menu" location
3. Add at least one item to menu
4. Save menu

#### Images Not Displaying

**Solution:**
1. Check image file size (should be under 2MB)
2. Verify image format (JPG, PNG, WebP)
3. Re-upload image
4. Check file permissions

### Advanced Customization

#### Custom CSS

1. Go to **Appearance → Customize → Additional CSS**
2. Add your custom CSS
3. Click **Publish**

Example:
```css
/* Change primary button color */
.btn-primary {
    background: #FF6B6B;
}

/* Change heading font size */
h1 {
    font-size: 4rem;
}
```

#### Child Theme (For Developers)

To make theme modifications that won't be overwritten:

1. Create folder: `multimian-studio-child`
2. Create `style.css`:
```css
/*
Theme Name: MultiMian Studio Child
Template: multimian-studio
*/
```
3. Create `functions.php`:
```php
<?php
add_action('wp_enqueue_scripts', 'child_theme_styles');
function child_theme_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
```
4. Upload to `/wp-content/themes/`
5. Activate child theme

### Backup and Maintenance

#### Regular Backups

Recommended: **UpdraftPlus** plugin

1. Install UpdraftPlus
2. Configure backup schedule
3. Connect to cloud storage (Dropbox, Google Drive)
4. Run first backup

#### Updates

1. Always backup before updating
2. Update WordPress core
3. Update plugins
4. Update theme (when available)
5. Test website after updates

### Getting Help

If you need assistance:

- **Email:** mianhassam96@gmail.com
- **WhatsApp:** +92 325 883 1437
- **Documentation:** Check README.md file

### Next Steps

After installation:

1. ✅ Add your content to pages
2. ✅ Upload portfolio projects
3. ✅ Customize colors and branding
4. ✅ Set up contact form email
5. ✅ Install security plugin (Wordfence)
6. ✅ Install backup plugin (UpdraftPlus)
7. ✅ Set up Google Analytics
8. ✅ Submit sitemap to Google Search Console
9. ✅ Test on mobile devices
10. ✅ Launch your website!

---

**Congratulations! Your MultiMian Studio website is ready to go! 🎉**
