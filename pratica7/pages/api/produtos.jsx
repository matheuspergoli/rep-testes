function numeroAleatorio(min = 1, max = 500) {
	return Math.floor(Math.random() * (max - min)) + min
}

function Produtos(req, res) {
	return res.status(200).json([
		{ id: numeroAleatorio(), nome: 'Caneta', preco: 5.6 },
		{ id: numeroAleatorio(), nome: 'Caderno', preco: 15.6 },
		{ id: numeroAleatorio(), nome: 'Borracha', preco: 7.3 },
		{ id: numeroAleatorio(), nome: 'Tesoura', preco: 21.55 },
		{ id: numeroAleatorio(), nome: 'Estojo', preco: 10.5 }
	])
}

export default Produtos
