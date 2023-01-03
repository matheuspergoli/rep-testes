import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req
	const id = req.query.id as string

	switch (method) {
		case 'DELETE':
			const deleteFuncionarios = await prisma.funcionario.delete({
				where: {
					id
				}
			})
			res.status(200).json(deleteFuncionarios)
			break
		case 'GET':
			const getFuncionarios = await prisma.funcionario.findUnique({
				where: {
					id
				}
			})
			res.status(200).json(getFuncionarios)
			break
		default:
			res.setHeader('Allow', ['DELETE'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default handler
