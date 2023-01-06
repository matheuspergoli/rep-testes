export const loginUser = async (user: { email: string; password: string }) => {
	const response = await fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	const data = await response.json()
	return data
}
