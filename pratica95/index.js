import express from 'express'

const app = express()

app.use(express.json())

app.use('/login', (req, res, next) => {
	const authorization = req.body.authorization
	if (authorization) {
		res.redirect('/login')
		next()
	} else {
		res.redirect('/logado')
		next()
	}
})

app.get('/', (req, res) => {
	res.send('Página Home')
})

app.post('/login', (req, res) => {
	res.send('Página Login')
})

app.get('/login', (req, res) => {
	res.send('Página Login')
})

app.post('/logado', (req, res) => {
	res.send('Página Logado')
})

app.get('/logado', (req, res) => {
	res.send('Página Logado')
})

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000')
})
