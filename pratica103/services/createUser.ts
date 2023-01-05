interface ISignUpUser {
	name: string
	email: string
	password: string
}

interface ICreateUserResponse {
	data: {
		id: string
		token: string
		message: string
	}
	response: Response
}

export const createUser = async (user: ISignUpUser) => {
	const response = await fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	const data = (await response.json()) as ICreateUserResponse['data']
	return { data, response }
}
