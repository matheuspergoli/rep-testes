import Head from 'next/head'
import { GetServerSideProps } from 'next'
import getAllUsers from '../service/getAllUsers'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['users'], getAllUsers)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['users'], queryFn: getAllUsers })

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1>NextJS App</h1>
			</main>
		</>
	)
}

export default Home
