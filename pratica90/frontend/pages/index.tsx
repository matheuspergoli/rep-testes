import React from 'react'
import Head from 'next/head'
import { QueryClient, useQuery, dehydrate } from 'react-query'
import { getAllFuncionarios } from '../service/getAllFuncionarios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('users', getAllFuncionarios)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: 'users', queryFn: getAllFuncionarios })

	console.log(data)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto p-3 sm:p-0'>
				<h1>NextJS App</h1>
			</main>
		</>
	)
}

export default Home
