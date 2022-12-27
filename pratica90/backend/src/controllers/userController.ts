import { Request, Response } from 'express'
import { userModel } from '../models/userModel'

class UserController {
	async getUsers(req: Request, res: Response) {
		const users = await userModel.find()

		return res.status(200).json(users)
	}

	async createUser(req: Request, res: Response) {
		const { name, profession, age } = req.body

		const user = await userModel.create({ name, profession, age })

		return res.status(201).json(user)
	}

	async deleteUser(req: Request, res: Response) {
		const { id } = req.params

		const user = await userModel.findByIdAndDelete(id)

		return res.status(200).json(user)
	}
}

export const userController = new UserController()
