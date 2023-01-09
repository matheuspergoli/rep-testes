import { z } from 'zod'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const registerSchema = z.object({
	name: z.string().min(5).trim(),
	email: z.string().email(),
	password: z.string().min(6)
})

async function register(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'POST':
			try {
				const { name, email, password } = registerSchema.parse(req.body)

				if (!name || !email || !password) {
					return res.status(400).json({ error: 'Please enter all fields' })
				}

				const userExists = await prisma.user.findUnique({
					where: {
						email
					}
				})

				if (userExists) {
					return res.status(400).json({ error: 'User already exists' })
				}

				const salt = await bcrypt.genSalt(12)
				const hashedPassword = await bcrypt.hash(password, salt)

				const user = await prisma.user.create({
					data: {
						name,
						email,
						password: hashedPassword
					}
				})

				res.status(201).json(user)
			} catch (error) {
				res.status(500).json({ error })
			}
			break
		default:
			res.setHeader('Allow', ['POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default register
