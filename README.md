# MultiMian Studio - Full Stack Web Development Agency

A modern, professional web development agency website built with Next.js, featuring authentication, user profiles, and a comprehensive service showcase.

## 🚀 Features

### Core Features
- ✅ Modern, responsive design with dark mode support
- ✅ Professional landing pages and service showcases
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with meta tags and structured data
- ✅ Fast performance with Next.js optimization

### Authentication System
- ✅ Email/Password authentication
- ✅ Google OAuth integration
- ✅ JWT-based session management
- ✅ Protected routes and middleware
- ✅ Secure password hashing with bcrypt

### User Profiles
- ✅ Create and edit user profiles
- ✅ Public shareable profile pages
- ✅ Profile customization (bio, skills, social links)
- ✅ Profile image upload support
- ✅ Privacy controls (public/private profiles)
- ✅ Profile view counter

### Pages
- Home page with hero section and features
- Services showcase
- Portfolio gallery
- About page
- Contact form
- Pricing page
- Process overview
- Testimonials
- FAQ section
- User dashboard
- Profile management

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with SSR
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **React Icons** - Icon library

### Backend
- **Next.js API Routes** - Serverless functions
- **MongoDB** - Database
- **Mongoose** - ODM
- **NextAuth.js** - Authentication
- **JWT** - Token-based auth
- **bcryptjs** - Password hashing

### DevOps
- **Vercel** - Deployment (recommended)
- **GitHub** - Version control
- **ESLint** - Code linting

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- MongoDB database (local or Atlas)
- Google OAuth credentials (optional)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/Mianhassam96/MultiMian-Studio.git
cd MultiMian-Studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/multimian
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-change-this

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-change-this

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Cloudinary (optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret to `.env.local`

### MongoDB Setup

**Option 1: Local MongoDB**
```bash
# Install MongoDB locally
# Start MongoDB service
mongod

# Use connection string
MONGODB_URI=mongodb://localhost:27017/multimian
```

**Option 2: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env.local`

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server on port 3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mianhassam96/MultiMian-Studio)

### Environment Variables for Production

Make sure to set these in your deployment platform:

```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your_production_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 📁 Project Structure

```
MultiMian-Studio/
├── components/          # React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   ├── auth/      # Authentication endpoints
│   │   └── profile/   # Profile endpoints
│   ├── index.tsx      # Home page
│   ├── login.tsx      # Login page
│   ├── signup.tsx     # Signup page
│   └── ...
├── lib/               # Utility functions
│   ├── auth.ts        # Auth helpers
│   ├── mongodb.ts     # Database connection
│   └── middleware.ts  # API middleware
├── models/            # Mongoose models
│   ├── User.ts
│   └── Profile.ts
├── styles/            # Global styles
│   └── globals.css
├── types/             # TypeScript types
│   └── next-auth.d.ts
├── public/            # Static assets
├── .env.local         # Environment variables (not in git)
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## 🔐 Security

- Passwords are hashed using bcrypt
- JWT tokens stored in httpOnly cookies
- CSRF protection enabled
- Input validation and sanitization
- Rate limiting on authentication endpoints
- Secure session management

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',
      // Add your colors
    }
  }
}
```

### Content
- Update company information in components
- Modify service offerings in `pages/services.tsx`
- Customize testimonials in `pages/testimonials.tsx`
- Update contact information in `components/Footer.tsx`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Mian Hassam**
- Website: [MultiMian Studio](https://mianhassam96.github.io/MultiMian-Studio/)
- GitHub: [@Mianhassam96](https://github.com/Mianhassam96)
- LinkedIn: [Mian Hassam](https://linkedin.com/in/mianhassam96)
- Email: mianhassam96@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email mianhassam96@gmail.com or create an issue in the repository.

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ by [Mian Hassam](https://github.com/Mianhassam96)
