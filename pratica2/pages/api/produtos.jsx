function Produtos(req, res) {
	const data = [
		{ id: 1, produto: 'Tablet', preco: 1800 },
		{ id: 2, produto: 'Notebook', preco: 3600 },
		{ id: 3, produto: 'Smartphone', preco: 3500 },
		{ id: 4, produto: 'Ventilador', preco: 1200 },
		{ id: 5, produto: 'Computador', preco: 7000 }
	]

	if (req.method === 'GET') return res.status(200).json(data)
	if (req.method === 'POST') {
		return res.status(200).json({
			metodo: req.method
		})
	}
}

export default Produtos
