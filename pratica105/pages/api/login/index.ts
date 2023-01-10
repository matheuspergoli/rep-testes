import { z } from 'zod'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { createUserToken } from '../../../helpers/create-user-token'

const prisma = new PrismaClient()

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
})

async function login(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'POST':
			try {
				const { email, password } = loginSchema.parse(req.body)

				if (!email || !password) {
					return res.status(400).json({ error: 'Preencha todos os campos' })
				}

				const user = await prisma.user.findUnique({
					where: {
						email
					}
				})

				if (!user) {
					return res.status(400).json({ error: 'Usuário não existe' })
				}

				const isMatch = await bcrypt.compare(password, user.password)

				if (!isMatch) {
					return res.status(400).json({ error: 'Credenciais incorretas' })
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

export default login
