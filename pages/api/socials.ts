// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Social } from '../../entities/social'
import { socials } from './data/socials'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Social[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(socials)
  }
}
