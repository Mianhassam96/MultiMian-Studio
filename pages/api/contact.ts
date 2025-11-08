import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' })

  // NOTE: This is a placeholder. Integrate with an email provider or CRM here.
  console.log('Contact form submission:', { name, email, message })

  return res.status(200).json({ message: 'Received' })
}
