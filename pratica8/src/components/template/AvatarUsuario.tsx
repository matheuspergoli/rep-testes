import React from 'react'
import Link from 'next/link'
import { AuthContext } from '../../data/context/AuthContext'

function AvatarUsuario() {
	const { usuario } = React.useContext(AuthContext)

	return (
		<Link href='/perfil'>
			<img
				className='h-10 w-10 rounded-full cursor-pointer'
				src={usuario?.imagemUrl ?? '/images/avatar.svg'}
				alt='Avatar do Usuário'
			/>
		</Link>
	)
}

export default AvatarUsuario
