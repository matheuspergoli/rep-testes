interface IGetUserResponse {
	data: {
		user: {
			id: string
			name: string
			email: string
		}
	}
	response: Response
}

export const getUser = async (id: string) => {
	const response = await fetch(`/api/users/${id}`)
	const data = (await response.json()) as IGetUserResponse['data']
	return { data, response }
}
