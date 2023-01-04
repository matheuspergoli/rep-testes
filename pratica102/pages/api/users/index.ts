import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req

	switch (method) {
		case 'GET':
			const users = await prisma.user.findMany()
			res.status(200).json(users)
			break
		case 'POST':
			const user = await prisma.user.create({
				data: {
					...req.body,
				}
			})
			res.status(201).json(user)
			break
		default:
			res.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default handler
