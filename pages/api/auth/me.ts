import type { NextApiResponse } from 'next'
import dbConnect from '../../../lib/mongodb'
import User from '../../../models/User'
import Profile from '../../../models/Profile'
import { authMiddleware, AuthenticatedRequest } from '../../../lib/middleware'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    await dbConnect()

    const user = await User.findById(req.user!.userId).select('-password')
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    // Check if profile exists
    const profile = await Profile.findOne({ userId: user._id })

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        image: user.image,
        hasProfile: !!profile,
        username: profile?.username,
      },
    })
  } catch (error: any) {
    console.error('Get user error:', error)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

export default authMiddleware(handler)
