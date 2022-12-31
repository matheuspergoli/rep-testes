import express from 'express'
import { funcionarioRouter } from './routes/funcionarioRoutes.js'

export const app = express()

// Middlewares
app.use(express.json())

// Routes
app.use(funcionarioRouter)
