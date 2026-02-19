import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/mongodb'
import Profile from '../../../models/Profile'
import User from '../../../models/User'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    await dbConnect()

    const { username } = req.query

    if (!username || typeof username !== 'string') {
      return res.status(400).json({ success: false, message: 'Username is required' })
    }

    // Find profile
    const profile = await Profile.findOne({ username: username.toLowerCase() }).populate('userId', 'name email image')

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' })
    }

    // Check if profile is public
    if (!profile.isPublic) {
      return res.status(404).json({ success: false, message: 'Profile not found' })
    }

    // Increment view count
    profile.views += 1
    await profile.save()

    const user = profile.userId as any

    return res.status(200).json({
      success: true,
      profile: {
        username: profile.username,
        name: user.name,
        bio: profile.bio,
        website: profile.website,
        location: profile.location,
        avatar: profile.avatar || user.image,
        skills: profile.skills,
        socialLinks: profile.socialLinks,
        views: profile.views,
        createdAt: profile.createdAt,
      },
    })
  } catch (error: any) {
    console.error('Get profile error:', error)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}
