import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req

	switch (method) {
		case 'GET':
			const games = await prisma.games.findMany()
			res.status(200).json(games)
			break
		case 'POST':
			const game = await prisma.games.create({
				data: {
					...req.body
				}
			})
			res.status(201).json(game)
			break
		case 'DELETE':
			const deletedGame = await prisma.games.delete({
				where: {
					id: req.body.id
				}
			})
			res.status(200).json(deletedGame)
			break
		default:
			res.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
