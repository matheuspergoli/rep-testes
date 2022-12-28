import dotenv from 'dotenv'
dotenv.config()

import { db } from './database/connect'
import express, { Request, Response } from 'express'

const app = express()
const port = 8080

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.get('/funcionarios', (req: Request, res: Response) => {
	db.query('SELECT * FROM funcionarios', (error, results) => {
		res.status(200).json(results)
	})
})

app.post('/funcionarios', (req: Request, res: Response) => {
	const { nome, sobrenome, profissao, idade } = req.body
	db.query(
		'INSERT INTO funcionarios (nome, sobrenome, profissao, idade) VALUES (?, ?, ?, ?)',
		[nome, sobrenome, profissao, idade],
		(error, results) => {
			res.status(201).json(results)
		}
	)
})

app.delete('/funcionarios/:id', (req: Request, res: Response) => {
	const { id } = req.params
	db.query('DELETE FROM funcionarios WHERE id = ?', [id], (error, results) => {
		res.status(200).json(results)
	})
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
