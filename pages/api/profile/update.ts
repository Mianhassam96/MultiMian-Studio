import type { NextApiResponse } from 'next'
import dbConnect from '../../../lib/mongodb'
import Profile from '../../../models/Profile'
import { authMiddleware, AuthenticatedRequest } from '../../../lib/middleware'
import { validateUsername } from '../../../lib/auth'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    await dbConnect()

    const { username, bio, website, location, skills, socialLinks, isPublic, avatar } = req.body

    // Find profile
    const profile = await Profile.findOne({ userId: req.user!.userId })
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' })
    }

    // Validate username if changed
    if (username && username !== profile.username) {
      const usernameValidation = validateUsername(username)
      if (!usernameValidation.valid) {
        return res.status(400).json({ success: false, message: usernameValidation.message })
      }

      // Check if new username is taken
      const usernameExists = await Profile.findOne({ username: username.toLowerCase() })
      if (usernameExists) {
        return res.status(400).json({ success: false, message: 'Username already taken' })
      }

      profile.username = username.toLowerCase()
    }

    // Update fields
    if (bio !== undefined) profile.bio = bio
    if (website !== undefined) profile.website = website
    if (location !== undefined) profile.location = location
    if (skills !== undefined) profile.skills = skills
    if (socialLinks !== undefined) profile.socialLinks = socialLinks
    if (isPublic !== undefined) profile.isPublic = isPublic
    if (avatar !== undefined) profile.avatar = avatar

    await profile.save()

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      profile: {
        id: profile._id,
        username: profile.username,
        bio: profile.bio,
        website: profile.website,
        location: profile.location,
        avatar: profile.avatar,
        skills: profile.skills,
        socialLinks: profile.socialLinks,
        isPublic: profile.isPublic,
      },
    })
  } catch (error: any) {
    console.error('Update profile error:', error)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

export default authMiddleware(handler)
