interface User {
	firstName: string
	lastName: string
	age: string
}

export const createUser = async (user: User) => {
	await fetch('http://localhost:8080/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
}
