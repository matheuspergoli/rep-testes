import React from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

interface MenuItemLogoutProps {
	icone: any
	texto: string
}

function MenuItemLogout(props: MenuItemLogoutProps) {
	const router = useRouter()

	async function logout() {
		await signOut(auth)
		router.push('/autenticacao')
	}

	return (
		<button
			className='w-20 h-16 p-2 flex flex-col items-center hover:bg-red-500 hover:text-white dark:text-white'
			onClick={logout}>
			{props.icone}
			<span className='text-xs'>{props.texto}</span>
		</button>
	)
}

export default MenuItemLogout
