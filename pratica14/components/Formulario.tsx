import React from 'react'
import { signIn } from 'next-auth/react'
import { Formik, Form, Field } from 'formik'
import UserSchemaValidation from '../validation/UserSchemaValidation'

function Formulario() {
	return (
		<div className='flex flex-col gap-2 max-w-xs w-full'>
			<Formik
				validationSchema={UserSchemaValidation}
				onSubmit={(values) => console.log(values)}
				initialValues={{ email: '', password: '' }}>
				{({ errors, touched }) => (
					<Form className='flex flex-col gap-3 w-full'>
						<section>
							<Field
								id='email'
								name='email'
								type='email'
								placeholder='Email'
								className='px-3 py-2 rounded-md outline-none w-full bg-gray-700'
							/>
						</section>

						<section>
							<Field
								id='password'
								name='password'
								type='password'
								placeholder='Senha'
								className='px-3 py-2 rounded-md outline-none w-full bg-gray-700'
							/>
						</section>

						<button
							type='submit'
							className='px-3 py-2 w-full rounded-md bg-gray-900 text-white'>
							Entrar
						</button>
					</Form>
				)}
			</Formik>
			<button
				type='submit'
				onClick={() => signIn('github')}
				className='px-3 py-2 w-full rounded-md bg-gray-900 text-white'>
				Entrar com Github
			</button>
		</div>
	)
}

export default Formulario
