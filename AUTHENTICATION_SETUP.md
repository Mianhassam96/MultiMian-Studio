# MultiMian Authentication & Profile System

## 🚀 Complete Setup Guide

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally
# macOS
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Update `.env` file

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/multimian
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key
NODE_ENV=development
```

Generate secure secrets:
```bash
# Generate JWT_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate NEXTAUTH_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Run the Application

```bash
npm run dev
```

Visit: http://localhost:3000

## 📋 Features Implemented

### ✅ Authentication System
- [x] Email & Password signup
- [x] Email & Password login
- [x] Secure password hashing (bcrypt)
- [x] JWT authentication with httpOnly cookies
- [x] Session management
- [x] Protected routes middleware
- [x] Auto-redirect for authenticated users
- [x] Rate limiting
- [x] Input validation & sanitization
- [ ] Google OAuth (NextAuth.js integration pending)
- [ ] Password reset functionality

### ✅ Profile System
- [x] Create profile with unique username
- [x] Edit profile anytime
- [x] Bio (max 300 characters)
- [x] Website URL
- [x] Location
- [x] Skills (array)
- [x] Social links (LinkedIn, GitHub, Twitter)
- [x] Public/Private toggle
- [x] Profile view counter
- [x] Public profile page `/u/[username]`
- [ ] Profile image upload (Cloudinary integration pending)
- [ ] QR code generator

### ✅ UI Components
- [x] Professional navbar with user menu
- [x] Responsive design
- [x] Dark theme
- [x] Smooth animations (Framer Motion)
- [x] Toast notifications
- [x] Loading states
- [x] Form validation

### ✅ Security
- [x] Password hashing with bcrypt (12 rounds)
- [x] JWT stored in httpOnly cookies
- [x] CSRF protection
- [x] XSS prevention
- [x] Input sanitization
- [x] Duplicate email/username prevention
- [x] Rate limiting on auth endpoints

### ✅ Database Models
- [x] User model (MongoDB/Mongoose)
- [x] Profile model (MongoDB/Mongoose)
- [x] Proper indexing
- [x] Validation rules

## 🗂 Project Structure

```
├── components/
│   └── Navbar.tsx              # Professional navbar with auth
├── lib/
│   ├── mongodb.ts              # Database connection
│   ├── auth.ts                 # Auth utilities
│   └── middleware.ts           # API middleware
├── models/
│   ├── User.ts                 # User schema
│   └── Profile.ts              # Profile schema
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup.ts       # Signup endpoint
│   │   │   ├── login.ts        # Login endpoint
│   │   │   ├── logout.ts       # Logout endpoint
│   │   │   └── me.ts           # Get current user
│   │   └── profile/
│   │       ├── create.ts       # Create profile
│   │       ├── update.ts       # Update profile
│   │       └── [username].ts   # Get public profile
│   ├── signup.tsx              # Signup page
│   ├── login.tsx               # Login page
│   ├── dashboard.tsx           # User dashboard
│   ├── create-profile.tsx      # Create profile page
│   ├── edit-profile.tsx        # Edit profile page
│   └── u/
│       └── [username].tsx      # Public profile page
└── .env.local                  # Environment variables
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user (protected)

### Profile
- `POST /api/profile/create` - Create profile (protected)
- `PUT /api/profile/update` - Update profile (protected)
- `GET /api/profile/[username]` - Get public profile

## 🧪 Testing the System

### 1. Create an Account
1. Go to http://localhost:3000/signup
2. Fill in the form
3. Click "Create Account"
4. You'll be redirected to create your profile

### 2. Create Profile
1. Choose a unique username
2. Add bio, skills, social links
3. Toggle public/private
4. Save profile

### 3. View Public Profile
- Visit: http://localhost:3000/u/your-username

### 4. Test Authentication
- Try accessing `/dashboard` without login (should redirect)
- Login and access dashboard (should work)
- Logout and verify session cleared

## 🔄 Next Steps (Optional Enhancements)

### Google OAuth Setup
1. Go to Google Cloud Console
2. Create OAuth 2.0 credentials
3. Add to `.env.local`:
```env
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```
4. Implement NextAuth.js provider

### Image Upload (Cloudinary)
1. Sign up at https://cloudinary.com
2. Get API credentials
3. Add to `.env.local`:
```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```
4. Create upload API endpoint

### Email Verification
1. Choose email service (SendGrid, AWS SES, etc.)
2. Create verification token system
3. Send verification emails
4. Add email verification check

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
brew services list

# Restart MongoDB
brew services restart mongodb-community
```

### JWT Token Issues
- Clear browser cookies
- Check JWT_SECRET in .env.local
- Verify token expiration (7 days default)

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

## 🎯 Production Checklist

Before deploying to production:

- [ ] Change all secret keys
- [ ] Use MongoDB Atlas (cloud database)
- [ ] Enable HTTPS
- [ ] Set up proper CORS
- [ ] Add rate limiting
- [ ] Enable email verification
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Add analytics
- [ ] Optimize images
- [ ] Add sitemap
- [ ] Configure robots.txt
- [ ] Set up CDN
- [ ] Enable caching
- [ ] Add backup system

## 📞 Support

For issues or questions:
- Email: support@multimian.com
- Phone: +92 325 883 1437

---

Built with ❤️ by MultiMian
