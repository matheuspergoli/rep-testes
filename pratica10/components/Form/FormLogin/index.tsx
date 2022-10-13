import React from 'react'
import LoginComGoogle from './LoginComGoogle'
import Formulario from './Formulario'
import Titulo from './Titulo'
import { FormAtualContext } from '../../../context/FormAtualContext'

function FormLogin() {
	const { setFormAtual } = React.useContext(FormAtualContext)

	function mudarFormulario() {
		setFormAtual((prevForm: boolean) => !prevForm)
	}

	return (
		<section className='w-80 p-5 rounded-md bg-white'>
			<Titulo titulo='Login' />
			<Formulario />
			<LoginComGoogle />
			<button
				className='w-full p-2 rounded-md border text-center bg-black text-white'
				onClick={mudarFormulario}>
				Ainda não possui conta?
			</button>
		</section>
	)
}

export default FormLogin
