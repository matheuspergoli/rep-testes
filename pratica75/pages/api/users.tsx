import { NextApiResponse, NextApiRequest } from 'next'

const users = [
	{
		id: 1,
		name: 'Leanne Graham'
	},
	{
		id: 2,
		name: 'Ervin Howell'
	}
]

async function Users(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(users)
	}

	if (req.method === 'POST') {
		const user = req.body
		users.push(user)
		res.status(200).json(users)
	}

	if (req.method === 'DELETE') {
		const user = req.body
		const index = users.findIndex((u) => u.id === user.id)
		users.splice(index, 1)
		res.status(200).json(users)
	}

	res.status(405).json({ message: 'Method not allowed' })
}

export default Users
