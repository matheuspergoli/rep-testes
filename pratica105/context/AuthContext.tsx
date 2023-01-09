import React from 'react'
import nookies from 'nookies'

interface User {
	name: string
	email: string
	password: string
}

interface SignUpResponse {
	id: string
	name: string
	email: string
	password: string
	error: string
}

interface SiginInResponse {
	id: string
	name: string
	email: string
	token: string
	message: string
	error: string
}

interface AuthContextType {
	isAuthenticated: boolean
	signOut: () => void
	signUp: (user: User) => Promise<SignUpResponse>
	signIn: (email: string, password: string) => Promise<SiginInResponse>
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthProvider = (props: { children: React.ReactNode }) => {
	const [session, setSession] = React.useState<SiginInResponse>()

	const isAuthenticated = false

	React.useEffect(() => {
		if (session) {
			nookies.set(undefined, 'USER_TOKEN', session?.token, {
				maxAge: 60 * 60
			})
		}
	}, [session])

	async function signUp(user: User) {
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			nookies.destroy(undefined, 'USER_TOKEN')
			const data = response.json()
			return data
		} catch (error) {
			console.log(error)
		}
	}

	async function signIn(email: string, password: string) {
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			})
			const data = await response.json()

			setSession(data)

			return data
		} catch (error) {
			console.log(error)
		}
	}

	function signOut() {
		nookies.destroy(undefined, 'USER_TOKEN')
		setSession(undefined)
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>{props.children}</AuthContext.Provider>
	)
}
