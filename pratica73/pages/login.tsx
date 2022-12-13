import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

function Login() {
	const user = useUser()
	const router = useRouter()
	const supabaseClient = useSupabaseClient()

	async function handleLogin() {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:3000'
			}
		})

		if (error) {
			console.log(error)
			return
		}
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>
				<h1 className='mb-10 text-4xl font-bold'>Faça login</h1>
				<button
					className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
					onClick={handleLogin}>
					Login with Google
				</button>

				{user && (
					<div className='mt-10'>
						<h2 className='text-2xl font-bold'>Usuário logado</h2>
						<p className='mt-2'>Email: {user.email}</p>
					</div>
				)}

				{user && (
					<button
						className='mt-10 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700'
						onClick={() => router.push('/')}>
						Acessar
					</button>
				)}
			</main>
		</>
	)
}

export default Login
