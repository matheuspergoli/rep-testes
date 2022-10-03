const usuarios = []

function Form(req, res) {
	if (req.method === 'POST') {
		const usuario = JSON.parse(req.body)
		usuarios.push(usuario)
		return res.status(200).send()
	}

	if (req.method === 'GET') {
		return res.status(200).json(usuarios)
	}
}

export default Form
