import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Formik, Field, Form } from 'formik'
import { AuthContext } from '../context/AuthContext'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { registerSchema } from '../validation/registerSchema'

function Home() {
	const { signUp } = React.useContext(AuthContext)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto'>
				<h1 className='mb-5 text-2xl font-bold'>Página de Cadastro</h1>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: ''
					}}
					validationSchema={toFormikValidationSchema(registerSchema)}
					onSubmit={async (values) => {
						const response = await signUp(values)
						if (response.error) {
							alert(response.error)
							return
						} else {
							Router.push('/login')
						}
					}}>
					{({ isSubmitting, errors, touched }) => (
						<Form>
							<div className='flex flex-col gap-5'>
								<div>
									<Field type='text' name='name' className='w-60 rounded-md border p-3' placeholder='Nome' />
									{errors.name && touched.name ? <p className='text-red-500'>{errors.name}</p> : null}
								</div>
								<div>
									<Field type='email' name='email' className='w-60 rounded-md border p-3' placeholder='Email' />
									{errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : null}
								</div>
								<div>
									<Field type='password' name='password' className='w-60 rounded-md border p-3' placeholder='Senha' />
									{errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p> : null}
								</div>
								<button
									type='submit'
									disabled={isSubmitting}
									className='w-60 rounded-md border bg-blue-500 p-3 font-bold text-white disabled:bg-opacity-75'>
									{isSubmitting ? 'Carregando...' : 'Cadastrar'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
				<Link
					href='/login'
					className='mt-10 block w-60 rounded-md border bg-blue-500 p-3 text-center font-bold text-white disabled:bg-opacity-75'>
					Faça login
				</Link>
			</main>
		</>
	)
}

export default Home
