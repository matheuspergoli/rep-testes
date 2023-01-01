import express from 'express'
import { usersRoute } from './routes/usersRoute.js'

const app = express()

// Middleware pra ler o body da requisição
app.use(express.json())

// Rotas
app.use(usersRoute)

// Rota 404
app.use((req, res) => {
	setTimeout(() => {
	res.status(404).send('Not found')
    
	}, 1000)
})

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000')
})
