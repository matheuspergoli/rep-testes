export const deleteFuncionario = async (id: number) => {
	await fetch(`http://localhost:8080/funcionarios/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
