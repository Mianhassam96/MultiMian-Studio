# MultiMian Studio WordPress Theme

A professional, modern WordPress theme for web development agencies with authentication, user profiles, and comprehensive features.

## Features

✅ Modern, responsive design
✅ Dark mode support
✅ User authentication (login/signup)
✅ Custom post types (Portfolio, Services, Testimonials)
✅ AJAX-powered forms
✅ Mobile-friendly navigation
✅ SEO optimized
✅ Custom widgets
✅ Social media integration
✅ Newsletter subscription
✅ Contact form
✅ Smooth animations
✅ Professional hero section
✅ Services showcase
✅ Features section
✅ CTA sections

## Installation

1. **Upload Theme**
   - Download the `wordpress-theme` folder
   - Rename it to `multimian-studio`
   - Upload to `/wp-content/themes/` directory
   - Or upload as ZIP through WordPress admin

2. **Activate Theme**
   - Go to Appearance → Themes
   - Find "MultiMian Studio"
   - Click "Activate"

3. **Create Required Pages**
   Create these pages with the specified templates:
   - Home (set as front page)
   - Login (Template: Login Page)
   - Signup (Template: Signup Page)
   - Dashboard
   - Contact
   - Portfolio
   - Services
   - About
   - Pricing

4. **Configure Menus**
   - Go to Appearance → Menus
   - Create "Primary Menu"
   - Add pages: Home, Services, Portfolio, Process, Pricing, About, Contact
   - Assign to "Primary Menu" location

5. **Customize Settings**
   - Go to Appearance → Customize
   - Configure:
     - Social Media URLs
     - Contact Information
     - Site Logo
     - Colors (if needed)

## Theme Structure

```
wordpress-theme/
├── style.css              # Theme stylesheet
├── functions.php          # Theme functions
├── header.php            # Header template
├── footer.php            # Footer template
├── index.php             # Home page template
├── page-login.php        # Login page template
├── page-signup.php       # Signup page template
├── assets/
│   ├── css/
│   │   └── main.css      # Main styles
│   └── js/
│       └── main.js       # Main JavaScript
└── README.md             # This file
```

## Customization

### Colors
Edit `style.css` CSS variables:
```css
:root {
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --secondary: #8b5cf6;
  /* ... */
}
```

### Social Media
Go to Appearance → Customize → Social Media:
- Facebook URL
- LinkedIn URL
- GitHub URL
- WhatsApp Number

### Contact Information
Go to Appearance → Customize → Contact Information:
- Phone Number
- Email Address
- Address

## Custom Post Types

### Portfolio
- Add portfolio items
- Featured image required
- Supports: title, editor, thumbnail, excerpt

### Services
- Add service offerings
- Featured image optional
- Supports: title, editor, thumbnail, excerpt

### Testimonials
- Add client testimonials
- Featured image for client photo
- Supports: title, editor, thumbnail

## Widgets

### Footer Widgets
- Footer 1: Company information
- Footer 2: Services links
- Footer 3: Resources links

### Sidebar
- Standard sidebar widget area

## Shortcodes

### Contact Form
```php
[contact_form]
```

### Newsletter Form
```php
[newsletter_form]
```

## AJAX Forms

All forms use AJAX for better UX:
- Contact form
- Newsletter subscription
- Login form
- Registration form

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Requirements

- WordPress 5.0+
- PHP 7.4+
- MySQL 5.6+

## Support

For support, email mianhassam96@gmail.com

## Credits

- Developed by: Mian Hassam
- GitHub: https://github.com/Mianhassam96
- Website: https://mianhassam96.github.io/MultiMian-Studio/

## License

MIT License - Free to use for personal and commercial projects

## Changelog

### Version 1.0.0
- Initial release
- Complete theme with all features
- Authentication system
- Custom post types
- AJAX forms
- Dark mode support
- Responsive design
