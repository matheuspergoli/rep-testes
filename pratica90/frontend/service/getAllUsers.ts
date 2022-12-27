export async function getAllUsers() {
	const response = await fetch('http://localhost:8080/users')
	const json = await response.json()
	return json
}
