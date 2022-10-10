function handler(req, res) {
	const id = req.query.id

	const alunos = [
		{ id: '1', nome: 'Matheus' },
		{ id: '2', nome: 'Karla' },
		{ id: '3', nome: 'Sophia' },
		{ id: '4', nome: 'Arthur' },
		{ id: '5', nome: 'Denise' }
	]

	const alunoSelecionado = alunos.filter((aluno) => aluno.id === id)

	return res.status(200).json(alunoSelecionado)
}

export default handler
