import React from 'react'
import Head from 'next/head'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { Formik, Field, Form } from 'formik'
import { AuthContext } from '../context/AuthContext'
import { loginSchema } from '../validation/loginSchema'
import { toFormikValidationSchema } from 'zod-formik-adapter'

interface TokenDecoded {
	user: {
		id: string
		name: string
		email: string
	}
}

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

const Login = () => {
	const { signIn } = React.useContext(AuthContext)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto'>
				<h1 className='mb-5 text-3xl font-bold'>Login</h1>
				<Formik
					initialValues={{
						email: '',
						password: ''
					}}
					validationSchema={toFormikValidationSchema(loginSchema)}
					onSubmit={async (values) => {
						const response = await signIn(values.email, values.password)
						if (response.error) {
							alert(response.error)
							return
						}
						setTimeout(() => {
							Router.push('/auth/dashboard')
						}, 500)
					}}>
					{({ isSubmitting, errors, touched }) => (
						<Form>
							<div className='flex flex-col gap-5'>
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
									{isSubmitting ? 'Carregando...' : 'Login'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</main>
		</>
	)
}

export default Login
