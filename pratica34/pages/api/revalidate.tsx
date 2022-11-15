import { NextApiRequest, NextApiResponse } from 'next'

async function revalidate(req: NextApiRequest, res: NextApiResponse) {
	await res.revalidate('/')
	res.status(200).json({ msg: 'Success' })
}

export default revalidate
