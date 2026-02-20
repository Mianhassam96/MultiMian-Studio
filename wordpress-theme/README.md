# MultiMian Studio WordPress Theme

A professional, modern WordPress theme for web development agencies and freelancers.

## Features

✨ **Modern Design**
- Clean, professional layout
- Gradient effects and animations
- Fully responsive design
- Mobile-first approach

🚀 **Performance**
- Optimized CSS and JavaScript
- Lazy loading images
- Fast page load times
- SEO friendly

💼 **Business Features**
- Newsletter subscription
- Contact form with AJAX
- WhatsApp integration
- Social media links
- Customizable colors

🎨 **Customization**
- WordPress Customizer support
- Custom logo support
- Menu management
- Widget areas

## Installation

### Method 1: Upload via WordPress Admin

1. Download the theme folder
2. Create a ZIP file of the `wordpress-theme` folder
3. Go to WordPress Admin → Appearance → Themes
4. Click "Add New" → "Upload Theme"
5. Choose the ZIP file and click "Install Now"
6. Click "Activate" after installation

### Method 2: FTP Upload

1. Download the theme folder
2. Connect to your server via FTP
3. Upload the `wordpress-theme` folder to `/wp-content/themes/`
4. Go to WordPress Admin → Appearance → Themes
5. Find "MultiMian Studio" and click "Activate"

## Configuration

### 1. Set Up Menus

1. Go to Appearance → Menus
2. Create a new menu called "Primary Menu"
3. Add pages: Home, Services, Portfolio, Process, Pricing, About, Contact
4. Assign to "Primary Menu" location
5. Save menu

### 2. Customize Settings

Go to Appearance → Customize:

**Contact Information:**
- Email Address
- Phone Number
- Address
- WhatsApp Number (without + sign)

**Social Media Links:**
- Facebook URL
- LinkedIn URL
- GitHub URL

### 3. Create Required Pages

Create these pages in WordPress:
- Home (set as front page)
- Services
- Portfolio
- Process
- Pricing
- About
- Contact
- Testimonials
- FAQ
- Privacy Policy
- Terms of Service

### 4. Set Front Page

1. Go to Settings → Reading
2. Select "A static page"
3. Choose "Home" as Front page
4. Save changes

## Theme Structure

```
wordpress-theme/
├── style.css           # Main stylesheet with all styles
├── functions.php       # Theme functions and features
├── header.php          # Header template
├── footer.php          # Footer template
├── index.php           # Main template (home page)
├── assets/
│   └── js/
│       └── main.js     # JavaScript functionality
└── README.md           # This file
```

## Features Included

### Header
- Animated logo
- Responsive navigation
- Mobile menu
- Sticky header on scroll

### Hero Section
- Large, eye-catching design
- Animated elements
- Tech stack badges
- Call-to-action buttons
- Statistics cards

### Services Section
- Grid layout
- Hover effects
- Feature tags
- Icon animations

### Footer
- Newsletter subscription
- Social media links
- Contact information
- Multiple columns
- Bottom copyright bar

### Interactive Elements
- WhatsApp floating button
- Scroll to top button
- Smooth scrolling
- Form submissions via AJAX
- Loading animations

## Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  /* ... more colors */
}
```

### Fonts

The theme uses:
- Space Grotesk for headings and logo
- System fonts for body text

To change fonts, edit the Google Fonts link in `functions.php`.

### Layout

All layout styles are in `style.css`. Look for section comments like:
- `/* Hero Section */`
- `/* Services Grid */`
- `/* Footer */`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Support

For issues or questions:
- Email: mianhassam96@gmail.com
- GitHub: https://github.com/Mianhassam96
- WhatsApp: +92 325 883 1437

## Credits

- Developed by: Mian Hassam
- Version: 2.0.0
- License: GPL v2 or later

## Changelog

### Version 2.0.0
- Complete redesign
- Added animations
- Improved performance
- Added AJAX forms
- Mobile optimization
- WhatsApp integration
- Newsletter functionality

---

Made with ❤️ by Mian Hassam
