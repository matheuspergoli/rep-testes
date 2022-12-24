interface UserModel {
	firstName: string
	lastName: string
	age: number
}

export const createUser = async (user: UserModel) => {
	await fetch('http://localhost:8080/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
}
