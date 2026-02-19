# MultiMian Authentication & Profile System - Setup Guide

## 🚀 Complete Authentication System

This platform includes:
- ✅ Email & Password Authentication
- ✅ Google OAuth Login
- ✅ Profile Creation & Management
- ✅ Public Shareable Profiles
- ✅ Dashboard
- ✅ Security (JWT, bcrypt, httpOnly cookies)
- ✅ SEO Optimized Public Profiles

## 📋 Prerequisites

- Node.js 16+ installed
- MongoDB installed locally or MongoDB Atlas account
- Google Cloud Console account (for OAuth)

## 🔧 Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create `.env.local` file in root directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/multimian

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-change-in-production

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Setup Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google` (production)
7. Copy Client ID and Client Secret to `.env.local`

### 4. Setup MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB
# Start MongoDB service
mongod

# Database will be created automatically
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env.local` as `MONGODB_URI`

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
pages/
├── api/
│   ├── auth/
│   │   ├── [...nextauth].ts    # NextAuth configuration
│   │   ├── signup.ts            # Email signup
│   │   ├── login.ts             # Email login
│   │   ├── logout.ts            # Logout
│   │   └── me.ts                # Get current user
│   ├── profile/
│   │   ├── create.ts            # Create profile
│   │   ├── update.ts            # Update profile
│   │   └── [username].ts        # Get public profile
│   └── upload.ts                # Image upload
├── signup.tsx                   # Signup page
├── login.tsx                    # Login page
├── dashboard.tsx                # User dashboard
├── create-profile.tsx           # Profile creation
├── edit-profile.tsx             # Profile editing
└── u/
    └── [username].tsx           # Public profile page

lib/
├── auth.ts                      # Auth utilities
├── mongodb.ts                   # Database connection
└── middleware.ts                # Auth middleware

models/
├── User.ts                      # User schema
└── Profile.ts                   # Profile schema
```

## 🔐 Authentication Flow

### Email Signup
1. User visits `/signup`
2. Fills form (name, email, password)
3. Password hashed with bcrypt
4. User created in database
5. JWT token set in httpOnly cookie
6. Redirected to `/create-profile`

### Email Login
1. User visits `/login`
2. Enters email & password
3. Password verified with bcrypt
4. JWT token set in httpOnly cookie
5. Redirected to `/dashboard`

### Google OAuth
1. User clicks "Continue with Google"
2. Redirected to Google consent screen
3. After approval, redirected back
4. User auto-created if first time
5. Session created
6. Redirected to `/dashboard`

## 👤 Profile System

### Create Profile
- Username (unique, lowercase, alphanumeric)
- Bio (max 300 chars)
- Website URL
- Location
- Skills (comma-separated)
- Social links (LinkedIn, GitHub, Twitter)
- Privacy toggle (public/private)
- Avatar upload

### Public Profile
- Accessible at `/u/username`
- SEO optimized with meta tags
- View counter
- Social links with rel="nofollow ugc"
- 404 if private or not found

### Dashboard
- Profile link with copy button
- View/Edit profile buttons
- Profile statistics
- Quick actions

## 🛡️ Security Features

- ✅ Password hashing (bcrypt, 12 rounds)
- ✅ JWT tokens in httpOnly cookies
- ✅ Protected API routes with middleware
- ✅ Input validation & sanitization
- ✅ Unique username/email enforcement
- ✅ XSS prevention
- ✅ CSRF protection (SameSite cookies)
- ✅ Rate limiting ready

## 🎨 Features

### User Features
- Sign up with email or Google
- Login with email or Google
- Create public profile
- Edit profile anytime
- Upload profile image
- Add bio, skills, social links
- Control profile visibility
- Share profile link
- Copy link to clipboard

### SEO Features
- Dynamic meta titles
- Meta descriptions
- Open Graph tags
- Twitter cards
- Structured data ready
- Fast page loads
- Mobile responsive

## 🚀 Deployment

### Environment Variables (Production)
```env
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=strong-random-secret
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=strong-random-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Update Google OAuth
Add production callback URL:
`https://yourdomain.com/api/auth/callback/google`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user
- `GET/POST /api/auth/[...nextauth]` - NextAuth routes

### Profile
- `POST /api/profile/create` - Create profile (protected)
- `PUT /api/profile/update` - Update profile (protected)
- `GET /api/profile/[username]` - Get public profile

### Upload
- `POST /api/upload` - Upload image (protected)

## 🧪 Testing

### Test Email Auth
1. Visit `/signup`
2. Create account
3. Create profile
4. View public profile at `/u/your-username`

### Test Google OAuth
1. Setup Google OAuth credentials
2. Visit `/login`
3. Click "Continue with Google"
4. Authorize
5. Create profile

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check MongoDB is running
- Verify MONGODB_URI in `.env.local`
- Check network/firewall settings

### Google OAuth Not Working
- Verify credentials in Google Console
- Check redirect URIs match exactly
- Ensure OAuth consent screen configured

### Profile Not Showing
- Check profile is set to public
- Verify username is correct
- Check database for profile record

## 📚 Next Steps

### Optional Enhancements
- [ ] Cloudinary integration for image uploads
- [ ] Email verification
- [ ] Password reset
- [ ] Profile analytics
- [ ] Follow system
- [ ] Verification badges
- [ ] Custom themes
- [ ] QR code generation
- [ ] Admin dashboard

## 🔗 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)

## 💡 Support

For issues or questions:
1. Check this guide
2. Review error messages
3. Check browser console
4. Verify environment variables
5. Test with fresh database

---

**System Status: ✅ FULLY FUNCTIONAL**

All authentication, profile creation, and sharing features are implemented and ready to use!
