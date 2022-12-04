import React from 'react'
import { auth } from '../services/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

interface User {
	id: string
	name: string
	avatar: string
}

interface AuthContextType {
	user: User | undefined
	signInWithGoogle: () => void
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthContextProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<User>()

	function signInWithGoogle() {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider).then((result) => {
			const { displayName, photoURL, uid } = result.user

			if (!displayName || !photoURL) {
				throw new Error('Missing information from Google Account.')
			}

			setUser({ id: uid, name: displayName, avatar: photoURL })
		})
	}

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle }}>
			{props.children}
		</AuthContext.Provider>
	)
}
