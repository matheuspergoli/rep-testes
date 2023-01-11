import nookies from 'nookies'

interface UserRegister {
	name: string
	email: string
	password: string
}

export const userRegister = async (user: UserRegister) => {
	const response = await fetch('/api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	const data = await response.json()
	nookies.destroy({}, 'user-token')
	return data
}
