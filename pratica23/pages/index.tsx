import React from 'react'
import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { GetServerSidePropsContext, GetServerSideProps } from 'next'
import Repos from '../components/Repos'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
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
			<main className='p-3 text-white'>
				<Repos />
			</main>
		</>
	)
}

export default Home
