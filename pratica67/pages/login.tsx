import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { LoginForm } from '../components/LoginForm'
import { MainContainer } from '../components/MainContainer'

function Login() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<MainContainer>
				<LoginForm />
				<h2 className='mt-10 mb-5 text-2xl'>Não possui conta?</h2>
				<Link href='/signup' className='underline'>
					Clique aqui
				</Link>{' '}
				para se registrar.
			</MainContainer>
		</>
	)
}

export default Login
