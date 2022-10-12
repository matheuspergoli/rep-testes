import React from 'react'
import UserSchema from '../../model/UserSchema'
import { useFormik } from 'formik'

function Form() {
	const formik = useFormik({
		initialValues: {
			senha: '',
			email: ''
		},
		onSubmit: () => null,
		validationSchema: UserSchema
	})

	function register() {}
	function login() {}
	function logout() {}

	return (
		<form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
			<input
				className='w-full p-2 rounded-md border focus:outline-none focus:bg-white focus:border-blue-400 bg-gray-200'
				type='email'
				name='email'
				placeholder='Insira seu email'
				value={formik.values.email}
				onChange={formik.handleChange}
			/>
			{formik.errors.email ? (
				<p className='text-red-600'>{formik.errors.email}</p>
			) : null}

			<input
				className='w-full p-2 rounded-md border focus:outline-none focus:bg-white focus:border-blue-400 bg-gray-200'
				type='password'
				name='senha'
				placeholder='Insira sua senha'
				value={formik.values.senha}
				onChange={formik.handleChange}
			/>
			{formik.errors.senha ? (
				<p className='text-red-600'>{formik.errors.senha}</p>
			) : null}

			<section className='flex flex-col gap-1 mt-5'>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={register}>
					Cadastrar
				</button>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={login}>
					Logar
				</button>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={logout}>
					Deslogar
				</button>
			</section>
		</form>
	)
}

export default Form
