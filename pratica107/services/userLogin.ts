import nookies from 'nookies'

interface UserLogin {
	email: string
	password: string
}

export const userLogin = async (user: UserLogin) => {
	const response = await fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	const data = await response.json()
	nookies.set({}, 'user-token', data.token, {
		maxAge: 7 * 24 * 60 * 60 // 7 days
	})
	return data
}
