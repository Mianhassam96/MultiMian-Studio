# MultiMian Studio WordPress Theme

A modern, professional WordPress theme for web development agencies, freelancers, and digital studios. Features premium design, dark mode support, portfolio management, and conversion-focused layouts.

## Features

- ✨ Modern, premium design with Tailwind CSS
- 🌓 Dark mode support with toggle
- 📱 Fully responsive and mobile-friendly
- ⚡ Fast and optimized performance
- 🎨 Custom portfolio post type with categories
- 💬 WhatsApp integration
- 📧 Contact form with AJAX submission
- 🎯 Conversion-focused layouts
- 🔧 Easy customization via WordPress Customizer
- ♿ Accessibility compliant
- 🌐 Translation ready

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher
- Modern web browser with JavaScript enabled

## Installation

### Method 1: Upload via WordPress Admin

1. Download the theme folder as a ZIP file
2. Go to WordPress Admin → Appearance → Themes
3. Click "Add New" → "Upload Theme"
4. Choose the ZIP file and click "Install Now"
5. Click "Activate" after installation

### Method 2: FTP Upload

1. Extract the theme folder
2. Upload the `multimian-studio` folder to `/wp-content/themes/`
3. Go to WordPress Admin → Appearance → Themes
4. Find "MultiMian Studio" and click "Activate"

## Initial Setup

### 1. Create Required Pages

Create the following pages in WordPress Admin → Pages → Add New:

- **Home** (Set as homepage in Settings → Reading)
  - Template: Home Page
  
- **Portfolio**
  - Template: Portfolio Page
  
- **Contact**
  - Template: Contact Page
  
- **Services** (Regular page)
- **About** (Regular page)
- **Pricing** (Regular page)
- **Process** (Regular page)
- **Testimonials** (Regular page)
- **FAQ** (Regular page)

### 2. Configure Homepage

1. Go to Settings → Reading
2. Select "A static page"
3. Choose your "Home" page as the homepage
4. Save changes

### 3. Set Up Navigation Menu

1. Go to Appearance → Menus
2. Create a new menu called "Primary Menu"
3. Add pages in this order:
   - Home
   - Services
   - Portfolio
   - Process
   - Pricing
   - About
   - Contact
4. Assign to "Primary Menu" location
5. Save menu

### 4. Configure Theme Settings

Go to Appearance → Customize:

**WhatsApp Settings:**
- Enter your WhatsApp number (format: +923258831437)

**Social Media Links:**
- Add your social media URLs (Facebook, Twitter, LinkedIn, Instagram, GitHub)

**Site Identity:**
- Upload your logo
- Set site title and tagline

### 5. Add Portfolio Items

1. Go to Portfolio → Add New
2. Add title, description, and featured image
3. Fill in portfolio details:
   - Tagline
   - Impact badge (e.g., "200% more engagement")
   - Demo URL
   - Repository URL
   - Technologies (format: "Next.js:frontend, Node.js:backend")
4. Assign to a portfolio category
5. Publish

### 6. Create Portfolio Categories

1. Go to Portfolio → Portfolio Categories
2. Add categories:
   - Web Application
   - E-Commerce
   - Business Website
   - (Add more as needed)

## Customization

### Colors

The theme uses these primary colors:
- Primary Blue: #2563EB
- Secondary Purple: #7C3AED
- Navy: #0B1C2D

To change colors, edit `/assets/css/custom.css`:

```css
:root {
    --color-primary: #2563EB;
    --color-secondary: #7C3AED;
    --color-navy: #0B1C2D;
}
```

### Fonts

The theme uses:
- **Headings:** Poppins
- **Body:** Inter
- **Logo:** Rajdhani

To change fonts, edit the Google Fonts import in `/assets/css/custom.css`.

### Logo

The logo displays as "MULTIMIAN" with:
- "MULTI" in blue (#2563EB)
- "MIAN" in gray/white

To use a custom logo:
1. Go to Appearance → Customize → Site Identity
2. Upload your logo image
3. Save changes

## Page Templates

### Home Page Template
- Hero section with CTA
- Services overview
- Trust badges
- Call-to-action section

### Portfolio Page Template
- Hero with statistics
- Category filters
- Portfolio grid with animations
- Project details (tagline, impact, technologies)
- CTA section

### Contact Page Template
- Contact form
- Contact information
- Business hours
- Quick response guarantees

## Custom Post Types

### Portfolio
- **Fields:** Title, Description, Featured Image
- **Meta Fields:** Tagline, Impact, Demo URL, Repo URL, Technologies
- **Taxonomy:** Portfolio Categories
- **Archive:** Displays on Portfolio page template

### Testimonials
- **Fields:** Title (Client Name), Content (Testimonial), Featured Image (Client Photo)
- **Usage:** Display testimonials on any page using shortcode or widget

## Widgets

The theme includes widget areas:
- Footer Column 1
- Footer Column 2

## Contact Form

The contact form uses AJAX for submission without page reload.

**To receive emails:**
1. Ensure your WordPress site can send emails
2. Test with a plugin like WP Mail SMTP if needed
3. Emails are sent to the admin email address

## WhatsApp Integration

The theme includes:
- Floating WhatsApp button (bottom right)
- WhatsApp links in contact section
- Configurable number via Customizer

## Dark Mode

Dark mode is:
- Automatically detected from user's system preference
- Toggleable via button in header
- Preference saved in browser localStorage

## Performance Optimization

The theme is optimized for performance:
- Minimal CSS and JavaScript
- Lazy loading for images
- Optimized animations
- CDN for external libraries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Portfolio items not showing
- Ensure you've created portfolio items
- Check that items are published (not draft)
- Verify you're using the "Portfolio Page" template

### Contact form not sending
- Check WordPress email settings
- Install WP Mail SMTP plugin
- Verify admin email in Settings → General

### Dark mode not working
- Clear browser cache
- Check JavaScript is enabled
- Ensure jQuery is loaded

### Menu not displaying
- Create a menu in Appearance → Menus
- Assign to "Primary Menu" location
- Add pages to the menu

## Support

For support and questions:
- **Email:** mianhassam96@gmail.com
- **WhatsApp:** +92 325 883 1437
- **GitHub:** https://github.com/Mianhassam96

## Credits

- **Developer:** Mian Hassam
- **Framework:** Tailwind CSS
- **Icons:** Heroicons
- **Fonts:** Google Fonts (Poppins, Inter, Rajdhani)

## License

This theme is licensed under the GNU General Public License v2 or later.

## Changelog

### Version 1.0.0
- Initial release
- Portfolio custom post type
- Dark mode support
- Contact form
- WhatsApp integration
- Responsive design
- Custom page templates

---

**Made with ❤️ by MultiMian Studio**
