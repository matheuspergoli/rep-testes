import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { Formik, Field, Form } from 'formik'
import { AuthContext } from '../context/AuthContext'
import { loginSchema } from '../validation/loginSchema'
import { toFormikValidationSchema } from 'zod-formik-adapter'

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
			<main className='container mx-auto flex flex-col items-center justify-center pt-60'>
				<h1 className='mb-5 text-2xl font-bold'>Faça login com sua conta. &copy;</h1>
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
						<Form className='w-full max-w-lg'>
							<div className='flex flex-col gap-2'>
								<div>
									<Field type='email' name='email' className='w-full rounded-md border p-3' placeholder='Email' />
									{errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : null}
								</div>
								<div>
									<Field type='password' name='password' className='w-full rounded-md border p-3' placeholder='Senha' />
									{errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p> : null}
								</div>
								<p className='text-right text-blue-800'>
									Não tem uma conta?{' '}
									<Link href='/' className='font-semibold underline'>
										Cadastre-se
									</Link>
								</p>
								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full rounded-md border bg-blue-500 p-3 font-bold text-white disabled:bg-opacity-75'>
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
