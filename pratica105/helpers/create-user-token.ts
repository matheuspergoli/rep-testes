import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

interface User {
	id: string
	name: string
	email: string
	password: string
}

export const createUserToken = async (user: User, req: NextApiRequest, res: NextApiResponse) => {
	const token = jwt.sign({ user }, process.env.NEXT_PUBLIC_JWT_SECRET as string, {
		expiresIn: '7d'
	})

	res.status(200).json({
		message: 'User Authenticated',
		id: user.id,
		name: user.name,
		email: user.email,
		token: token
	})
}
