export const deleteFuncionario = async (id: string) => {
	fetch(`http://localhost:3000/api/funcionarios/${id}`, {
		method: 'DELETE'
	})
}
