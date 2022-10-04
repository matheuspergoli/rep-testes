const usuarios = []

function Usuarios(req, res) {
	if (req.method === 'GET') {
		return res.status(200).json(usuarios)
	}

	if (req.method === 'POST') {
		const usuario = JSON.parse(req.body)
		usuarios.push(usuario)
		return res.status(200).send()
	}
}

export default Usuarios
