import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { SignUpForm } from '../components/SignUpForm'
import { MainContainer } from '../components/MainContainer'

function SignUp() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<MainContainer>
				<SignUpForm />
				<h2 className='mt-10 mb-5 text-2xl'>Já possui conta?</h2>
				<Link href='/login' className='underline'>
					Clique aqui
				</Link>{' '}
				para fazer login.
			</MainContainer>
		</>
	)
}

export default SignUp
