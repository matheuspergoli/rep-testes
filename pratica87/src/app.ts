import express from 'express'

const app = express()

app.get('/', (req, res) => {
	const users = [
		{ name: 'John Doe', age: 42 },
		{ name: 'Jane Doe', age: 42 },
		{ name: 'John Doe', age: 42 }
	]
	res.status(200).json(users)
})

export const viteNodeApp = app
