import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { Formik, Form, Field } from 'formik'
import { loginSchema } from '../validations'
import { AuthContext } from '../context/AuthContext'
import { toFormikValidationSchema } from 'zod-formik-adapter'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const cookies = nookies.get(context)

	if (cookies?.['user-token']) {
		const { 'user-token': token } = cookies
		try {
			const verifyToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string)
			return {
				redirect: {
					destination: '/dashboard',
					permanent: false
				}
			}
		} catch (error) {
			return {
				props: {}
			}
		}
	}

	return {
		props: {}
	}
}

function Login() {
	const { signIn } = React.useContext(AuthContext)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='flex h-screen items-center justify-center'>
				<section className='w-full max-w-lg'>
					<h1 className='mb-5 flex items-center justify-center text-xl font-bold'>Faça login na plataforma. &copy;</h1>
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						validationSchema={toFormikValidationSchema(loginSchema)}
						onSubmit={async (values, { setSubmitting }) => {
							setSubmitting(true)
							const response = await signIn(values)
							if (response?.error) {
								alert(response.error)
								setSubmitting(false)
								return
							} else {
								Router.push('/dashboard')
							}
						}}>
						{({ isSubmitting, errors, touched }) => (
							<Form className='flex flex-col gap-3'>
								<div className='flex flex-col gap-1'>
									<Field
										id='email'
										name='email'
										type='email'
										placeholder='Digite seu e-mail'
										className='rounded-md border border-gray-300 p-2'
									/>
									{errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : null}
								</div>
								<div className='flex flex-col gap-1'>
									<Field
										id='password'
										name='password'
										type='password'
										placeholder='Digite sua senha'
										className='rounded-md border border-gray-300 p-2'
									/>
									{errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p> : null}
								</div>
								<Link href='/' className='text-right text-sm text-blue-500 underline'>
									Não possui uma conta? Cadastre-se
								</Link>
								<button
									type='submit'
									disabled={isSubmitting}
									className='rounded-md bg-blue-500 p-2 text-white disabled:bg-opacity-75'>
									{isSubmitting ? 'Carregando...' : 'Entrar'}
								</button>
							</Form>
						)}
					</Formik>
				</section>
			</main>
		</>
	)
}

export default Login
