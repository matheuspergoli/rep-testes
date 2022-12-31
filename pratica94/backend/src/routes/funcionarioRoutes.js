import express from 'express'
import { funcionarioController } from '../controllers/funcionarioController.js'

const router = express.Router()

router.get('/api/funcionarios', funcionarioController.getFuncionarios)
router.get('/api/funcionarios/:id', funcionarioController.getFuncionario)
router.post('/api/funcionarios', funcionarioController.createFuncionario)
router.delete('/api/funcionarios/:id', funcionarioController.deleteFuncionario)

export { router as funcionarioRouter }
