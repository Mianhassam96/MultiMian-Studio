import type { NextApiResponse } from 'next'
import { authMiddleware, AuthenticatedRequest } from '../../lib/middleware'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { image } = req.body

    if (!image) {
      return res.status(400).json({ success: false, message: 'Image data required' })
    }

    // For now, return the base64 image
    // In production, upload to Cloudinary
    return res.status(200).json({
      success: true,
      url: image,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return res.status(500).json({ success: false, message: 'Upload failed' })
  }
}

export default authMiddleware(handler)

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}
