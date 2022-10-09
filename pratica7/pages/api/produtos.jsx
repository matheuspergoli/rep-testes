function Produtos(req, res) {
	return res.status(200).json([
		{ id: 1, nome: 'Caneta', preco: 5.6 },
		{ id: 2, nome: 'Caderno', preco: 15.6 },
		{ id: 3, nome: 'Borracha', preco: 7.3 },
		{ id: 4, nome: 'Tesoura', preco: 21.55 },
		{ id: 5, nome: 'Estojo', preco: 10.5 }
	])
}

export default Produtos
