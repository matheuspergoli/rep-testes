import React from 'react'
import { getAllUsers } from '../service/getAllUsers'
import { QueryClient, useQuery, dehydrate } from 'react-query'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('users', getAllUsers)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: 'users', queryFn: getAllUsers })

	return (
		<main>
			<h1>NextJS App</h1>
		</main>
	)
}

export default Home
