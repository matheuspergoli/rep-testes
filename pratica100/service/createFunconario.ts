interface Funcionario {
	nome: string
	sobrenome: string
	cargo: string
	salario: number
	idade: number
}

export const createFuncionario = async (funcionario: Funcionario) => {
	fetch('http://localhost:3000/api/funcionarios', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(funcionario)
	})
}
