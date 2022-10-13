import React from 'react'
import Input from './Input'
import { useFormik } from 'formik'
import { CadastroSchema } from '../../../model/CadastroSchema'

function Formulario() {
	const formik = useFormik({
		initialValues: {
			senha: '',
			email: ''
		},
		validationSchema: CadastroSchema,
		onSubmit: () => null
	})

	return (
		<form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
			<Input
				type='email'
				placeholder='Digite seu email'
				value={formik.values.email}
				onChange={formik.handleChange}
			/>
			{formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> : null}

			<Input
				type='password'
				placeholder='Digite sua senha'
				value={formik.values.senha}
				onChange={formik.handleChange}
			/>
			{formik.errors.senha ? <p className='text-red-500'>{formik.errors.senha}</p> : null}

			<button className='p-2 border rounded-md bg-black text-white' type='submit'>
				Cadastrar
			</button>
		</form>
	)
}

export default Formulario
