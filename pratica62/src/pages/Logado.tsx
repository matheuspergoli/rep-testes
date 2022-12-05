import React from 'react'
import { UserAuth } from '../context/UserAuth'

export const Logado = () => {
	const { user, deslogarUser } = React.useContext(UserAuth)

	return (
		<section>
			<h1 className='text-2xl font-semibold text-white'>
				Usuário Logado: {user?.email}
			</h1>
			<button
				className='mt-4 rounded bg-red-500 px-4 py-2 text-white'
				onClick={deslogarUser}>
				Deslogar
			</button>
		</section>
	)
}
