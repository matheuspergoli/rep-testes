import express from 'express'
import { UserModel } from '../models/user.js'

const app = express()

const port = 8080

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)

	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')

	next()
})

app.get('/users', async (req, res) => {
	const users = await UserModel.find({})

	res.status(200).json(users)
})

app.post('/users', async (req, res) => {
	try {
		const user = await UserModel.create(req.body)

		res.status(201).json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.delete('/users/:id', async (req, res) => {
	try {
		const { id } = req.params

		const deleted = await UserModel.findByIdAndDelete(id)

		if (deleted) {
			return res.status(200).send('User deleted')
		}

		throw new Error('User not found')
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
