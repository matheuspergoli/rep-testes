import { PrismaClient } from '@prisma/client'
import { NextApiResponse, NextApiRequest } from 'next'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req

	switch (method) {
		case 'GET':
			const getFuncionarios = await prisma.funcionario.findMany()
			res.status(200).json(getFuncionarios)
			break
		case 'POST':
			const createFuncionario = await prisma.funcionario.create({
				data: {
					...req.body
				}
			})
			res.status(201).json(createFuncionario)
			break
		default:
			res.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default handler
