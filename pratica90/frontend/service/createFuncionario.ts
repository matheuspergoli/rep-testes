interface Funcionario {
	nome: string
	sobrenome: string
	profissao: string
	idade: number
}

export const createFuncionario = async (funcionario: Funcionario) => {
	await fetch('http://localhost:8080/funcionarios', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(funcionario)
	})
}
