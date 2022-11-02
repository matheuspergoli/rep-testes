import React from 'react'
import Head from 'next/head'
import { getSession, signOut } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		}
	}

	return {
		props: {
			session
		}
	}
}

function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1>NextJS App</h1>
				<button onClick={() => signOut()} className='mt-5 rounded-md p-1 font-bold text-lg bg-gray-300'>
					Sair
				</button>
			</main>
		</>
	)
}

export default Home
