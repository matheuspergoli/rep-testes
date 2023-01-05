import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { createUserToken } from '../../../helpers/create-user-token'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'POST':
			try {
				const { email, password } = req.body

				const user = await prisma.user.findUnique({
					where: {
						email
					}
				})

				if (!user) {
					return res.status(404).json({ error: 'User not found' })
				}

				const passwordMatch = await bcrypt.compare(password, user.password)

				if (!passwordMatch) {
					return res.status(401).json({ error: 'Incorrect password' })
				}

				createUserToken(user, req, res)
			} catch (error) {
				res.status(500).json({ error })
			}
			break
		default:
			res.setHeader('Allow', ['POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
