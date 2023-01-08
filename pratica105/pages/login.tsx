import React from 'react'
import Head from 'next/head'
import nookies from 'nookies'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { AuthContext } from '../context/AuthContext'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const cookies = nookies.get(context)
	if (cookies.USER_TOKEN) {
		return {
			redirect: {
				destination: '/dashboard',
				permanent: false
			}
		}
	}

	return {
		props: {}
	}
}

interface User {
	email: string
	password: string
}

const Login = () => {
	const { signIn } = React.useContext(AuthContext)
	const [user, setUser] = React.useState<User>({
		email: '',
		password: ''
	})

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto'>
				<h1 className='mb-5 text-3xl font-bold'>Login</h1>
				<form
					className='flex flex-col gap-5'
					onSubmit={async (e) => {
						e.preventDefault()
						await signIn(user.email, user.password)
						setUser({ email: '', password: '' })
						Router.push('/dashboard')
					}}>
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
						placeholder='Password'
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
					<button type='submit' className='w-60 rounded-md border bg-blue-500 p-3 text-white'>
						Login
					</button>
				</form>
			</main>
		</>
	)
}

export default Login
