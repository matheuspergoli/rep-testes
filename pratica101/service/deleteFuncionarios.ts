export const deleteFuncionarios = async (id: string) => {
	const response = await fetch(`/api/funcionarios/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return response.json()
}
