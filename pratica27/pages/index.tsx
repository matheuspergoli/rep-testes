import Head from 'next/head'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

async function getCountries() {
	const response = await fetch('https://restcountries.com/v3.1/all')
	const json = await response.json()
	return json
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['countries'], getCountries)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['countries'], queryFn: getCountries })

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1>NextJS Home</h1>
			</main>
		</>
	)
}

export default Home
