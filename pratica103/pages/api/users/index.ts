import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'GET':
			try {
				const users = await prisma.user.findMany({
					select: {
						name: true,
						email: true
					}
				})

				if (users) {
					return res.status(200).json({ users })
				} else {
					return res.status(404).json({ error: 'No users found' })
				}
			} catch (error) {
				res.status(500).json({ error })
			}
			break
		case 'POST':
			const { name, email, password } = req.body
			if (!name || !email || !password) {
				return res.status(400).json({ error: 'Please fill in all fields' })
			}
			const userExists = await prisma.user.findUnique({
				where: {
					email
				}
			})
			if (userExists) {
				return res.status(400).json({ error: 'User already exists' })
			}

			try {
				const passwordHash = await bcrypt.hash(password, 10)
				const user = await prisma.user.create({
					data: {
						name,
						email,
						password: passwordHash
					}
				})

				// createUserToken(user, req, res)
				return res.status(201).json({ message: 'User created' })
			} catch (error) {
				console.log(error)
				res.status(500).json({ error })
			}
			break
		default:
			res.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
