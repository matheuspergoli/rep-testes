import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req
	const id = req.query.id

	switch (method) {
		case 'GET':
			try {
				const user = await prisma.user.findUnique({
					where: {
						id: id as string
					},
					select: {
            id: true,
						name: true,
						email: true
					}
				})

				if (user) {
					return res.status(200).json({ user })
				} else {
					return res.status(404).json({ error: 'No user found' })
				}
			} catch (error) {
				res.status(500).json({ error })
			}
			break
		default:
			res.setHeader('Allow', ['GET'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
