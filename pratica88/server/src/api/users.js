const express = require('express')
const { UserModel } = require('../models/userModel')

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
		res.status(400).json(error)
	}
})

app.delete('/users/:id', async (req, res) => {
	try {
		const id = req.params.id

		const user = await UserModel.findByIdAndDelete(id)

		res.status(200).json(user)
	} catch (error) {
		res.status(400).json(error)
	}
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
