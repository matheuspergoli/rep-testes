import React from 'react'
import Button from './Button'
import Facebook from './Facebook'
import Input from './Input'
import Twitter from './Twitter'
import ValidationSchema from './ValidationSchema'
import { ToastContainer, toast } from 'react-toastify'
import { useFormik } from 'formik'

import 'react-toastify/dist/ReactToastify.css'

function Form() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: ValidationSchema,
		onSubmit: handleSubmit
	})

	function handleSubmit(event) {
		formik.resetForm()
		toast.success('Login efetuado!', {
			autoClose: 2000
		})
	}

	return (
		<>
			<main className='mt-32 p-5 w-full max-w-sm mx-auto rounded-md bg-white'>
				<h1 className='text-3xl mb-4 font-bold text-black'>Login</h1>
				<form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>
					<Input
						type='email'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						placeholder='Digite seu email'
					/>
					{formik.errors.email ? (
						<p className='text-red-600'>{formik.errors.email}</p>
					) : null}
					<Input
						type='password'
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						placeholder='**********'
					/>
					{formik.errors.password ? (
						<p className='text-red-600'>{formik.errors.password}</p>
					) : null}
					<Button />
					<p className='text-center text-gray-color'>
						Ou entre com sua rede social
					</p>
					<Twitter />
					<Facebook />
				</form>
			</main>
			<ToastContainer />
		</>
	)
}

export default Form
