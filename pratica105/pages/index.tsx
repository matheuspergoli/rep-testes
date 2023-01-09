import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { Formik, Field, Form } from 'formik'
import { AuthContext } from '../context/AuthContext'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { registerSchema } from '../validation/registerSchema'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const cookies = nookies.get(context)
	const userCredentials = jwt.decode(cookies.USER_TOKEN) as TokenDecoded

	if (userCredentials) {
		return {
			redirect: {
				destination: '/auth/dashboard',
				permanent: false
			}
		}
	} else {
		return {
			props: {}
		}
	}
}

function Home() {
	const { signUp } = React.useContext(AuthContext)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto flex flex-col items-center justify-center pt-60'>
				<h1 className='mb-5 text-2xl font-bold'>Cadastre-se na plataforma. &copy;</h1>

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
						<Form className='w-full max-w-lg'>
							<div className='flex flex-col gap-2'>
								<div>
									<Field type='text' name='name' className='w-full rounded-md border p-3' placeholder='Nome' />
									{errors.name && touched.name ? <p className='text-red-500'>{errors.name}</p> : null}
								</div>
								<div>
									<Field type='email' name='email' className='w-full rounded-md border p-3' placeholder='Email' />
									{errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : null}
								</div>
								<div>
									<Field type='password' name='password' className='w-full rounded-md border p-3' placeholder='Senha' />
									{errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p> : null}
								</div>
								<p className='text-right text-blue-800'>
									Já tem uma conta?{' '}
									<Link href='/login' className='font-semibold underline'>
										Faça login
									</Link>
								</p>
								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full rounded-md border bg-blue-500 p-3 font-bold text-white disabled:bg-opacity-75'>
									{isSubmitting ? 'Carregando...' : 'Cadastrar'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</main>
		</>
	)
}

export default Home
