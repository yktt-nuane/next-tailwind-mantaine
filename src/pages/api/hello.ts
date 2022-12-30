// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withAxiom, AxiomAPIRequest } from 'next-axiom'

import type { NextApiResponse } from 'next'

async function handler(req: AxiomAPIRequest, res: NextApiResponse) {
  req.log.info('Hello from function', { url: req.url })
  res.status(200).json({ name: 'John Doe' })
}

export default withAxiom(handler)
