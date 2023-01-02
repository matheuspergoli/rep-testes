export async function getAllFuncionarios() {
	const response = await fetch('http://localhost:3000/api/funcionarios')
	const json = await response.json()
	return json
}
