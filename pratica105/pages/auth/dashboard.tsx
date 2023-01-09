import React from 'react'
import Head from 'next/head'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { AuthContext } from '../../context/AuthContext'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const token = res.getHeader('x-user-token') as string

	const userCredentials = jwt.decode(token) as TokenDecoded

	return {
		props: {
			user: {
				id: userCredentials.user.id,
				name: userCredentials.user.name,
				email: userCredentials.user.email
			}
		}
	}
}

const Dashboard = (props: TokenDecoded) => {
	const { signOut, user } = React.useContext(AuthContext)
	function handleSignOut() {
		signOut()
		Router.push('/')
	}

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto'>
				<h1 className='text-2xl font-bold'>Dashboard</h1>
				<p className='text-lg'>Bem vindo, {user?.name}</p>
				<button
					className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
					onClick={() => handleSignOut()}>
					Sair
				</button>
			</main>
		</>
	)
}

export default Dashboard
