export const getUsers = async () => {
	const response = await fetch('http://localhost:3000/api/users')
	return await response.json()
}

export const createUser = async (user: { id: number; name: string }) => {
	return await fetch('http://localhost:3000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
}

export const deleteUser = async (id: number) => {
	return await fetch('http://localhost:3000/api/users', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id })
	})
}
