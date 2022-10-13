import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/config'

interface UserLoggedProps {
	children: React.ReactNode
}

export const UserLoggedContext = React.createContext(null)

export function UserLoggedContextProvider(props: UserLoggedProps) {
	const [user, setUser] = React.useState(null)

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser)
	})

	return <UserLoggedContext.Provider value={{ user }}>{props.children}</UserLoggedContext.Provider>
}
