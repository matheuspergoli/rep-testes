interface IAuthUserResponse {
	data: {
		id: string
		token: string
		message: string
	}
	response: Response
}

export const authUser = async (token: string) => {
	const response = await fetch('/api/auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`
		}
	})
	const data = (await response.json()) as IAuthUserResponse['data']
	return { data, response }
}
