import React from 'react'
import { Link } from 'react-router-dom'

function Contato() {
	return (
		<main className='p-2'>
			<h2 className='text-3xl font-bold mb-5'>Página Contato</h2>
			<section className='flex flex-col gap-2'>
				<Link
					to='/'
					className='w-fit px-4 py-1 rounded-full text-white bg-gray-900'>
					Ir para Página Home
				</Link>
				<Link
					to='/sobre'
					className='w-fit px-4 py-1 rounded-full text-white bg-gray-900'>
					Ir para Página Sobre
				</Link>
			</section>
		</main>
	)
}

export default Contato
