import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { AuthContext } from '../context/AuthContext'

interface User {
	name: string
	email: string
	password: string
}

function Home() {
	const { signUp } = React.useContext(AuthContext)
	const [user, setUser] = React.useState<User>({
		name: '',
		email: '',
		password: ''
	})

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto'>
				<h1 className='mb-5 text-2xl font-bold'>Página de Cadastro</h1>
				<form
					className='flex flex-col gap-5'
					onSubmit={async (e) => {
						e.preventDefault()
						await signUp(user)
						setUser({ name: '', email: '', password: '' })
						Router.push('/login')
					}}>
					<input
						type='text'
						className='w-60 rounded-md border p-3'
						placeholder='Nome'
						value={user.name}
						onChange={(e) => setUser({ ...user, name: e.target.value })}
					/>
					<input
						type='email'
						className='w-60 rounded-md border p-3'
						placeholder='Email'
						value={user.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					/>
					<input
						type='password'
						className='w-60 rounded-md border p-3'
						placeholder='Senha'
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
					<button type='submit' className='w-60 rounded-md border bg-blue-500 p-3 text-white'>
						Cadastrar
					</button>
				</form>
			</main>
		</>
	)
}

export default Home
