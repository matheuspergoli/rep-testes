import dotenv from 'dotenv'
import { db } from './database/connect'
import express, { Request, Response } from 'express'

dotenv.config()
const app = express()
const port = 8080

app.use(express.json())

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

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
