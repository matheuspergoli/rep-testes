const express = require('express')
const db = require('./queries')

const app = express()
const port = 8080

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

	next()
})

app.get('/products', db.getProducts)
app.post('/products', db.createProduct)

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})
