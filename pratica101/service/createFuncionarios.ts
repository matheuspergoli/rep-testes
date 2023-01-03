interface Funcionario {
	id: string
	nome: string
	sobrenome: string
	cargo: string
	salario: number
	idade: number
}

export const createFuncionarios = async (funcionario: Funcionario) => {
	const response = await fetch('/api/funcionarios', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(funcionario)
	})

	return response.json()
}
