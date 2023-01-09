import React from 'react'
import nookies from 'nookies'

interface UserSignUp {
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

interface SignInResponse {
	id: string
	name: string
	email: string
	token: string
	message: string
	error: string
}

interface AuthContextType {
	user: User | undefined
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>
	signOut: () => void
	signUp: (user: UserSignUp) => Promise<SignUpResponse>
	signIn: (email: string, password: string) => Promise<SignInResponse>
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<User | undefined>(undefined)
	const [session, setSession] = React.useState<SignInResponse>()

	React.useEffect(() => {
		if (session) {
			nookies.set(undefined, 'USER_TOKEN', session?.token, {
				maxAge: 60 * 60 * 24 * 7 // 7 days
			})
			setUser(session)
		}
	}, [session])

	async function signUp(user: UserSignUp) {
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
		setUser(undefined)
		setSession(undefined)
	}

	return (
		<AuthContext.Provider value={{ signIn, signUp, signOut, user, setUser }}>{props.children}</AuthContext.Provider>
	)
}
