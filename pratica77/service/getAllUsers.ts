export async function getAllUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const json = await response.json()
	return json
}
