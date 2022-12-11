import React from 'react'
import Head from 'next/head'
import { signIn } from 'next-auth/react'

function Login() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>
				<h1 className='mb-10 text-4xl font-bold'>Faça login</h1>

				<button
					className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
					onClick={() => signIn('github', { callbackUrl: '/secure' })}>
					Login com GitHub
				</button>
			</main>
		</>
	)
}

export default Login
