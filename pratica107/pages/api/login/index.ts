import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { loginSchema } from '../../../validations'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

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
					return res.status(400).json({ error: 'Usuário não encontrado' })
				}

				const isPasswordCorrect = await bcrypt.compare(password, user.password)

				if (!isPasswordCorrect) {
					return res.status(400).json({ error: 'Login inválido' })
				}

				const secret = process.env.NEXT_PUBLIC_JWT_SECRET as string
				const token = jwt.sign({ user }, secret, {
					expiresIn: '7d'
				})

				return res.status(200).json({
					id: user.id,
					name: user.name,
					email: user.email,
					token: token
				})
			} catch (error) {
				return res.status(500).json({ error })
			}
		default:
			res.setHeader('Allow', ['POST'])
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.setHeader('Access-Control-Allow-Methods', 'POST')
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default login
