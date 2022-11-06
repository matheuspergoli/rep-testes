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
			<section className='h-screen px-10 py-5 dark:text-white dark:bg-gray-800'>
				<h1>NextJS Home</h1>
			</section>
		</>
	)
}

export default Home
