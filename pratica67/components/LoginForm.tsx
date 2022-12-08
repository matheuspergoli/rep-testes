import React from 'react'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast, Toaster } from 'react-hot-toast'

export const LoginForm = () => {
	const router = useRouter()
	const supabase = useSupabaseClient()

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	async function loginUser(event: React.FormEvent) {
		event.preventDefault()

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})

		if (error) {
			toast('Email ou senha incorretos')
			return
		}

		router.push('/')
	}

	return (
		<>
			<Toaster />
			<h1 className='mb-10 text-4xl font-bold'>Login</h1>
			<form className='flex flex-col gap-5' onSubmit={loginUser}>
				<input
					type='email'
					className='border p-1 outline-none'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					className='border p-1 outline-none'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type='submit'
					className='w-fit rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600'>
					Submit
				</button>
			</form>
		</>
	)
}
