import Router from 'next/router'
import React from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
	usuario?: Usuario
	loginGoogle?: () => Promise<void>
}

async function usuarioNormalizado(
	usuarioFirebase: firebase.User
): Promise<Usuario> {
	const token = await usuarioFirebase.getIdToken()
	return {
		uid: usuarioFirebase.uid,
		nome: usuarioFirebase.displayName,
		email: usuarioFirebase.email,
		token,
		provedor: usuarioFirebase.providerData[0].providerId,
		imagemUrl: usuarioFirebase.photoURL
	}
}

export const AuthContext = React.createContext<AuthContextProps>({})

export function AuthContextProvider(props: any) {
	const [usuario, setUsuario] = React.useState<Usuario>(null)

	async function loginGoogle() {
		const response = await firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())

		if (response.user?.email) {
			const usuario = await usuarioNormalizado(response.user)
			setUsuario(usuario)
			Router.push('/')
		}
	}

	return (
		<AuthContext.Provider value={{ usuario, loginGoogle }}>
			{props.children}
		</AuthContext.Provider>
	)
}
