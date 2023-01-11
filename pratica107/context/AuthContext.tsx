import React from 'react'
import nookies from 'nookies'

interface UserSignUp {
	name: string
	email: string
	password: string
}

interface UserSignIn {
	email: string
	password: string
}

interface UserSignUpResponse {
	id: string
	name: string
	email: string
	password: string
	error: string
}

interface UserSignInResponse {
	id: string
	name: string
	email: string
	token: string
	error: string
}

interface AuthContextType {
	signUp: (user: UserSignUp) => Promise<UserSignUpResponse>
	signIn: (user: UserSignIn) => Promise<UserSignInResponse>
	signOut: () => void
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthProvider = (props: { children: React.ReactNode }) => {
	async function signUp(user: UserSignUp) {
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

	async function signIn(user: UserSignIn) {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const data = await response.json()
		nookies.set({}, 'user-token', data.token, {
			maxAge: 30 * 24 * 60 * 60 // 30 days
		})
		return data
	}

	async function signOut() {
		nookies.destroy({}, 'user-token', {
			path: '/'
		})
	}

	return <AuthContext.Provider value={{ signUp, signIn, signOut }}>{props.children}</AuthContext.Provider>
}
