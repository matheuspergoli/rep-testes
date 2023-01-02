import dotenv from 'dotenv'
import express from 'express'
import { PrismaClient } from '@prisma/client'

dotenv.config()

const app = express()
const prisma = new PrismaClient()

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
	const { nome, sobrenome, cargo, salario, idade } = req.body

	const funcionario = await prisma.funcionario.create({
		data: {
			nome,
			sobrenome,
			cargo,
			salario,
			idade
		}
	})

	res.status(201).json(funcionario)
})

app.listen(8080, () => console.log('Server is running at http://localhost:8080'))
