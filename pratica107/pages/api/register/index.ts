import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { registerSchema } from '../../../validations'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function register(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'POST':
			try {
				const { name, email, password } = registerSchema.parse(req.body)

				if (!name || !email || !password) {
					return res.status(400).json({ error: 'Preencha todos os campos' })
				}

				const userExists = await prisma.user.findUnique({
					where: {
						email
					}
				})

				if (userExists) {
					return res.status(400).json({ error: 'Usuário indisponível' })
				}

				const salt = await bcrypt.genSalt(10)
				const hashedPassword = await bcrypt.hash(password, salt)

				const user = await prisma.user.create({
					data: {
						name: name,
						email: email,
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
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.setHeader('Access-Control-Allow-Methods', 'POST')
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default register
