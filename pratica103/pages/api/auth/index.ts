import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

interface UserDecoded {
	user: {
		id: string
		name: string
		email: string
		password: string
	}
	iat: number
	exp: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req
	const token = req.headers.authorization?.split(' ')[1]

	switch (method) {
		case 'POST':
			try {
				if (!token) {
					return res.status(401).json({ message: 'Unauthorized' })
				}

				const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string) as UserDecoded

				return res.status(200).json({
					message: 'User Authenticated',
					id: decoded.user.id
				})
			} catch (error) {
				return res.status(500).json({ message: 'Internal server error' })
			}
		default:
			res.setHeader('Allow', ['POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
