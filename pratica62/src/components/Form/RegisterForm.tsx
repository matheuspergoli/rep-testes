import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import { UserAuth } from '../../context/UserAuth'
import { RegisterValidation } from '../../validation/'

export const RegisterForm = () => {
	const { registrarUser } = React.useContext(UserAuth)

	return (
		<section className='w-full max-w-xs'>
			<h1 className='mb-5 text-center text-2xl font-bold text-white'>
				Registrar Usuário
			</h1>
			<Formik
				initialValues={{
					email: '',
					password: '',
					passwordConfirmation: ''
				}}
				validationSchema={RegisterValidation}
				onSubmit={({ email, password }) => {
					registrarUser(email, password)
				}}>
				{({ errors, touched }) => (
					<Form className='flex  flex-col items-center justify-center gap-5'>
						<div className='w-full'>
							<Field
								name='email'
								type='email'
								placeholder='Digite seu Email'
								className='w-full rounded-md p-1'
							/>
							{errors.email && touched.email ? (
								<p className='text-red-600'>{errors.email}</p>
							) : null}
						</div>

						<div className='w-full'>
							<Field
								name='password'
								type='password'
								placeholder='Digite sua senha'
								className='w-full rounded-md p-1'
							/>
							{errors.password && touched.password ? (
								<p className='text-red-600'>{errors.password}</p>
							) : null}
						</div>

						<div className='w-full'>
							<Field
								name='passwordConfirmation'
								type='password'
								placeholder='Confirme sua senha'
								className='w-full rounded-md p-1'
							/>
							{errors.passwordConfirmation && touched.passwordConfirmation ? (
								<p className='text-red-600'>{errors.passwordConfirmation}</p>
							) : null}
						</div>

						<button
							type='submit'
							className='w-full rounded-md bg-blue-500 p-1 font-semibold transition hover:bg-blue-600'>
							Registrar
						</button>

						<Link
							to='/login'
							className='w-full rounded-md bg-red-500 p-1 text-center font-semibold transition hover:bg-red-600'>
							Logar
						</Link>
					</Form>
				)}
			</Formik>
		</section>
	)
}
