import mysql from 'mysql2'
import express from 'express'

const app = express()

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Weewefamilha1999.22',
	database: 'empresa'
})

const users = {
	nome: 'Matheus',
	sobrenome: 'Santos'
}

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
})

app.get('/users', (req, res) => {
	db.query('SELECT * from funcionarios', (error, result) => {
		res.status(200).json(result)
	})
})

app.get('/users/', (req, res) => {
	const { id, user, nome } = req.query

	res.status(200).json({
		id,
		user,
		nome
	})
})

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})
