import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '../../../lib/mongodb'
import User from '../../../models/User'
import { verifyPassword } from '../../../lib/auth'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required')
        }

        await dbConnect()

        const user = await User.findOne({ email: credentials.email.toLowerCase() }).select('+password')
        if (!user) {
          throw new Error('Invalid credentials')
        }

        if (user.provider === 'google' && !user.password) {
          throw new Error('Please use Google sign-in')
        }

        const isValid = await verifyPassword(credentials.password, user.password!)
        if (!isValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        await dbConnect()

        const existingUser = await User.findOne({ email: user.email })

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            provider: 'google',
            image: user.image,
          })
        } else if (existingUser.provider !== 'google') {
          existingUser.provider = 'google'
          existingUser.image = user.image || undefined
          await existingUser.save()
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
}

export default NextAuth(authOptions)
