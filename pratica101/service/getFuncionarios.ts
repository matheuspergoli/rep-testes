export const getFuncionarios = async () => {
	const response = await fetch('/api/funcionarios')
	const data = await response.json()
	return data
}
