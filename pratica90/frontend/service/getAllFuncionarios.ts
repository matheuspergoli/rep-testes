export async function getAllFuncionarios() {
	const response = await fetch('http://localhost:8080/funcionarios')
	const json = await response.json()
	return json
}
