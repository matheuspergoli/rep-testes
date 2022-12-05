import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabase'

interface User {
	email: string
}

export const UserAuth = React.createContext({
	user: undefined as User | undefined,
	registrarUser: (email: string, password: string) => {},
	logarUser: (email: string, password: string) => {},
	deslogarUser: () => {}
})

export const UserAuthProvider = (props: { children: React.ReactNode }) => {
	const navigate = useNavigate()
	const [user, setUser] = React.useState<User>()

	async function registrarUser(email: string, password: string) {
		const { data, error } = await supabase.auth.signUp({
			email,
			password
		})

		setUser(data.user as User)

		if (error) {
			alert('Occoreu um erro durante o registro')
		} else {
			navigate('/logado')
		}
	}

	async function logarUser(email: string, password: string) {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})

		setUser(data.user as User)

		if (error) {
			alert(error.message)
		} else {
			navigate('/logado')
		}
	}

	async function deslogarUser() {
		const { error } = await supabase.auth.signOut()

		setUser(undefined)

		if (error) {
			alert('Occoreu um erro durante o logout')
		} else {
			navigate('/')
		}
	}

	async function checarUsuarioLogado() {
		const { data, error } = await supabase.auth.getSession()

		if (data) {
			setUser(data.session?.user as User)
		}
	}

	React.useEffect(() => {
		checarUsuarioLogado()
	}, [user])

	return (
		<UserAuth.Provider value={{ user, registrarUser, logarUser, deslogarUser }}>
			{props.children}
		</UserAuth.Provider>
	)
}
