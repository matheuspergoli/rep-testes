import React from 'react'
import { Link } from 'react-router-dom'

function Sobre() {
	return (
		<main className='p-2'>
			<h2 className='text-3xl font-bold mb-5'>Página Sobre</h2>
			<section className='flex flex-col gap-2'>
				<Link
					to='/'
					className='w-fit px-4 py-1 rounded-full text-white bg-gray-900'>
					Ir para Página Home
				</Link>
				<Link
					to='/contato'
					className='w-fit px-4 py-1 rounded-full text-white bg-gray-900'>
					Ir para Página Contato
				</Link>
			</section>
		</main>
	)
}

export default Sobre
