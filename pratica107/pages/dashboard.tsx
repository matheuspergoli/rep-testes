import React from 'react'
import Head from 'next/head'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { AuthContext } from '../context/AuthContext'

interface UserData {
	user: {
		id: string
		name: string
		email: string
	}
}

interface User {
	id: string
	name: string
	email: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const cookies = nookies.get(context)

	if (cookies?.['user-token']) {
		const { 'user-token': token } = cookies
		try {
			const verifyToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string) as UserData
			return {
				props: {
					id: verifyToken.user.id,
					name: verifyToken.user.name,
					email: verifyToken.user.email
				}
			}
		} catch (error) {
			return {
				redirect: {
					destination: '/',
					permanent: false
				}
			}
		}
	}

	return {
		props: {}
	}
}

function Dashboard(props: User) {
	const { signOut } = React.useContext(AuthContext)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto'>
				<h1 className='mb-5 text-2xl font-bold'>Dashboard</h1>
				<p className='mb-5'>Bem vindo, {props.name}</p>
				<p className='mb-5'>Seu email: {props.email}</p>
				<button
					className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
					onClick={() => {
						signOut()
						Router.push('/')
					}}>
					Logout
				</button>
			</main>
		</>
	)
}

export default Dashboard
