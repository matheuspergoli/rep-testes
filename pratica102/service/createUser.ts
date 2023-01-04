interface User {
	name: string
	email: string
}

export async function createUser(user: User) {
	const response = await fetch('http://localhost:3000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	const json = await response.json()
	return json
}
