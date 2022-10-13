import React from 'react'
import Input from './Input'

function Formulario() {
	return (
		<form className='flex flex-col gap-2'>
			<Input type='email' placeholder='Digite seu email' />
			<Input type='password' placeholder='Digite sua senha' />
			<button className='p-2 border rounded-md bg-black text-white' type='submit'>
				Cadastrar
			</button>
		</form>
	)
}

export default Formulario
