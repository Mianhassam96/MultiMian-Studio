import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken, TokenPayload } from './auth'

export interface AuthenticatedRequest extends NextApiRequest {
  user?: TokenPayload
}

export function authMiddleware(
  handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>
) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const token = req.cookies.token

      if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication required' })
      }

      const decoded = verifyToken(token)

      if (!decoded) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token' })
      }

      req.user = decoded
      return handler(req, res)
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Server error' })
    }
  }
}

export function rateLimiter(maxRequests: number, windowMs: number) {
  const requests = new Map<string, number[]>()

  return (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    const now = Date.now()
    const windowStart = now - windowMs

    if (!requests.has(ip as string)) {
      requests.set(ip as string, [])
    }

    const userRequests = requests.get(ip as string)!
    const recentRequests = userRequests.filter(time => time > windowStart)

    if (recentRequests.length >= maxRequests) {
      return res.status(429).json({ success: false, message: 'Too many requests' })
    }

    recentRequests.push(now)
    requests.set(ip as string, recentRequests)
    next()
  }
}
