
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;
  res.status(200).json({ message: `Hello ${query}!` });
}