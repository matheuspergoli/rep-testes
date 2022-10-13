import React from 'react'
import Formulario from './Formulario'
import Titulo from './Titulo'

function FormCadastro() {
	return (
		<section className='w-80 p-5 rounded-md bg-white'>
			<Titulo titulo='Cadastrar' />
			<Formulario />
		</section>
	)
}

export default FormCadastro
