import React from 'react'
import Button from './Button'
import Facebook from './Facebook'
import Input from './Input'
import Twitter from './Twitter'

function Form() {
	return (
		<main className='mt-32 p-5 w-full max-w-sm mx-auto rounded-md bg-white'>
			<h1 className='text-3xl mb-4 font-bold text-black'>Login</h1>
			<form className='flex flex-col gap-3'>
				<Input type='email' placeholder='Digite seu email' />
				<Input type='password' placeholder='**********' />
				<Button />
				<p className='text-center text-gray-color'>
					Ou entre com sua rede social
				</p>
				<Twitter />
				<Facebook />
			</form>
		</main>
	)
}

export default Form
