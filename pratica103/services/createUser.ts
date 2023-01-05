interface User {
	name: string
	email: string
	password: string
}

export const createUser = async (user: User) => {
	const response = await fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	const data = await response.json()
	return data
}
