import mysql from 'mysql2'
import dotenv from 'dotenv'
import express from 'express'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const prisma = new PrismaClient()

const db = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
})

const app = express()

app.use(express.json())

app.get('/funcionarios', async (req, res) => {
	const funcionarios = await prisma.funcionario.findMany()
	res.status(200).json(funcionarios)
})

app.get('/funcionarios/:id', async (req, res) => {
	const id = req.params.id

	const funcionario = await prisma.funcionario.findUnique({
		where: {
			id: Number(id)
		}
	})

	res.status(200).json(funcionario)
})

app.post('/funcionarios', async (req, res) => {
	const { nome, sobrenome, salario, cargo, idade } = req.body

	const funcionario = await prisma.funcionario.create({
		data: {
			nome,
			sobrenome,
			salario,
			cargo,
			idade
		}
	})

	res.status(201).json(funcionario)
})

// app.get('/funcionarios', (req, res) => {
// 	db.query('SELECT * FROM funcionarios', (error, result) => {
// 		res.status(200).json(result)
// 	})
// })

// app.get('/funcionarios/:id', (req, res) => {
// 	const id = req.params.id

// 	db.query('SELECT * FROM funcionarios WHERE id = ?', [id], (error, result) => {
// 		res.status(200).json(result)
// 	})
// })

// app.post('/funcionarios', (req, res) => {
// 	const { nome, sobrenome, salario, cargo, idade } = req.body

// 	db.query(
// 		'INSERT INTO funcionarios (nome, sobrenome, salario, cargo, idade) values (?, ?, ?, ? ,?)',
// 		[nome, sobrenome, salario, cargo, idade],
// 		(error, result) => {
// 			res.status(201).json(result)
// 		}
// 	)
// })

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000')
})
