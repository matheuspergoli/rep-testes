import React from 'react'
import { supabase } from '../services/supabase'
import type { User, UserMetadata } from '@supabase/supabase-js'

interface IUser extends User {
	user_metadata: UserMetadata
}

export const UserContext = React.createContext({
	user: null as IUser | null,
	setUser: (user: any) => {}
})

export const UserContextProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<IUser | null>(null)

	async function getUser() {
		const {
			data: { user }
		} = await supabase.auth.getUser()
		setUser(user)
	}

	async function getSession() {
		const { data, error } = await supabase.auth.getSession()

		if (error) {
			console.log(error)
		}

		if (data.session) {
			getUser()
		}
	}

	React.useEffect(() => {
		getSession()
	}, [])

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	)
}
