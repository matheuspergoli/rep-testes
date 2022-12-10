import React from 'react'
import { supabase } from '../services/supabase'
import { Container } from '../components/Container'
import { UserContext } from '../context/UserContext'

export const Home = () => {
	const { setUser } = React.useContext(UserContext)

	async function signInWithGoogle() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		})

		if (error) {
			console.log(error)
		} else {
			setUser(data)
		}
	}

	async function signInWithGitHub() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		})

		if (error) {
			console.log(error)
		} else {
			setUser(data)
		}
	}

	return (
		<Container>
			<h1 className='mb-10 text-4xl font-bold'>Home</h1>

			<div className='flex flex-col gap-5'>
				<button
					onClick={signInWithGoogle}
					className='w-40 rounded-md bg-blue-500 px-3 py-2 text-center text-white transition hover:bg-blue-600'>
					Logar com Google
				</button>

				<button
					onClick={signInWithGitHub}
					className='w-40 rounded-md bg-blue-500 px-3 py-2 text-center text-white transition hover:bg-blue-600'>
					Logar com Github
				</button>
			</div>
		</Container>
	)
}
