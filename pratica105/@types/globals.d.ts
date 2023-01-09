interface User {
	id: string
	name: string
	email: string
}

interface TokenDecoded {
	user: {
		id: string
		name: string
		email: string
	}
}
