import type { NextApiResponse } from 'next'
import dbConnect from '../../../lib/mongodb'
import Profile from '../../../models/Profile'
import User from '../../../models/User'
import { authMiddleware, AuthenticatedRequest } from '../../../lib/middleware'
import { validateUsername } from '../../../lib/auth'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    await dbConnect()

    const { username, bio, website, location, skills, socialLinks, isPublic } = req.body

    // Validation
    if (!username) {
      return res.status(400).json({ success: false, message: 'Username is required' })
    }

    const usernameValidation = validateUsername(username)
    if (!usernameValidation.valid) {
      return res.status(400).json({ success: false, message: usernameValidation.message })
    }

    // Check if profile already exists for this user
    const existingProfile = await Profile.findOne({ userId: req.user!.userId })
    if (existingProfile) {
      return res.status(400).json({ success: false, message: 'Profile already exists' })
    }

    // Check if username is taken
    const usernameExists = await Profile.findOne({ username: username.toLowerCase() })
    if (usernameExists) {
      return res.status(400).json({ success: false, message: 'Username already taken' })
    }

    // Create profile
    const profile = await Profile.create({
      userId: req.user!.userId,
      username: username.toLowerCase(),
      bio: bio || '',
      website: website || '',
      location: location || '',
      skills: skills || [],
      socialLinks: socialLinks || {},
      isPublic: isPublic !== undefined ? isPublic : true,
    })

    // Update user with username
    await User.findByIdAndUpdate(req.user!.userId, { username: username.toLowerCase() })

    return res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      profile: {
        id: profile._id,
        username: profile.username,
        bio: profile.bio,
        website: profile.website,
        location: profile.location,
        skills: profile.skills,
        socialLinks: profile.socialLinks,
        isPublic: profile.isPublic,
      },
    })
  } catch (error: any) {
    console.error('Create profile error:', error)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

export default authMiddleware(handler)
