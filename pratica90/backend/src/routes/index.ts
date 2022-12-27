import { Router } from 'express'
import { userController } from '../controllers/userController'

export const router = Router()

router.get('/users', userController.getUsers)
router.post('/users', userController.createUser)
router.delete('/users/:id', userController.deleteUser)
