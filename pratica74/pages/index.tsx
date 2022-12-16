import React from 'react'
import Head from 'next/head'
import { getAllUsers } from '../service'
import { Users } from '../components/Users'
import { QueryClient, dehydrate } from 'react-query'

export const getServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('users', getAllUsers)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main>
				<Users />
			</main>
		</>
	)
}

export default Home
