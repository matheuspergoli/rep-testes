import { PrismaClient } from '@prisma/client'
import { NextApiResponse, NextApiRequest } from 'next'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req
	const { id } = req.query

	switch (method) {
		case 'GET':
			const getFuncionario = await prisma.funcionario.findUnique({
				where: {
					id: Number(id)
				}
			})
			res.status(200).json(getFuncionario)
			break
		case 'DELETE':
			const deleteFuncionario = await prisma.funcionario.delete({
				where: {
					id: Number(id)
				}
			})
			res.status(200).json(deleteFuncionario)
			break
		default:
			res.setHeader('Allow', ['GET', 'DELETE'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}

export default handler
