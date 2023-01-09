import React from 'react'
import Head from 'next/head'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { AuthContext } from '../context/AuthContext'

interface TokenDecoded {
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
	if (!cookies.USER_TOKEN) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	const userCredentials = jwt.decode(cookies.USER_TOKEN) as TokenDecoded

	if (!userCredentials) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

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

const Dashboard = (props: { user: User }) => {
	const { signOut } = React.useContext(AuthContext)

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
				<p className='text-lg'>Bem vindo, {props.user.name}</p>
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
