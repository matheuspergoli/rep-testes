import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
	const { data: session } = useSession()
	const modalRef = React.useRef<HTMLDialogElement>(null)

	const handleOpenModal = () => {
		modalRef.current?.showModal()
	}

	const handleCloseModal = () => {
		modalRef.current?.close()
	}

	return (
		<>
			<header className='mb-10 flex items-center justify-between bg-zinc-800 p-3 sm:p-5'>
				<h1 className='cursor-default text-2xl font-bold italic text-white underline selection:bg-transparent sm:text-4xl'>
					Next Store
				</h1>
				<nav>
					<button onClick={handleOpenModal} className='text-xl font-semibold text-white sm:text-2xl'>
						{session ? 'Conta' : 'Login'}
					</button>
				</nav>
			</header>

			<dialog
				ref={modalRef}
				className='rounded-lg bg-white shadow-lg backdrop:bg-zinc-800 backdrop:bg-opacity-80'>
				<div className='p-5'>
					<h2 className='text-center text-2xl font-bold'>{session ? 'Você está logado' : 'Login'}</h2>
					{session ? (
						<button
							onClick={() => signOut()}
							className='mt-5 w-full rounded-lg bg-red-500 p-3 text-white hover:bg-red-600'>
							Sair
						</button>
					) : (
						<button
							onClick={() => signIn('google')}
							className='mt-5 w-full rounded-lg bg-red-500 p-3 text-white hover:bg-red-600'>
							Entrar com Google
						</button>
					)}
					<button
						onClick={handleCloseModal}
						className='mt-5 w-full rounded-lg bg-gray-500 p-3 text-white hover:bg-gray-600'>
						Cancelar
					</button>
				</div>
			</dialog>
		</>
	)
}
