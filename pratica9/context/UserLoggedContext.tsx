import React from 'react'
import { auth } from '../firebase/config'
import { onAuthStateChanged, User } from 'firebase/auth'

interface ContextProviderProps {
	children: React.ReactElement
}

export const UserLoggedContext = React.createContext(null)

export function UserLoggedContextProvider(props: ContextProviderProps) {
	const [user, setUser] = React.useState<User>(null)

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser)
	})

	return (
		<UserLoggedContext.Provider value={{ user }}>
			{props.children}
		</UserLoggedContext.Provider>
	)
}
