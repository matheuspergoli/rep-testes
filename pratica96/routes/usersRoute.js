import { Router } from 'express'

const router = Router()

router.get('/users', (req, res) => {
	res.send('GET Users')
})

router.get('/users/:id', (req, res) => {
	const id = req.params.id

	res.send({ id })
})

router.post('/users', (req, res) => {
	res.send('POST Users')
})

export { router as usersRoute }
