const Pool = require('pg').Pool

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'Ecommerce',
	password: 'Weewefamilha1999.22',
	port: 5432
})

const getProducts = (request, response) => {
	pool.query('SELECT * FROM product', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createProduct = (request, response) => {
	const { name, price, description } = request.body

	pool.query(
		'INSERT INTO product (name, price, description) VALUES ($1, $2, $3)',
		[name, price, description],
		(error, results) => {
			if (error) {
				throw error
			}
			response.status(201).send(`Product added with NAME: ${name}`)
		}
	)
}

module.exports = {
	getProducts,
	createProduct
}
