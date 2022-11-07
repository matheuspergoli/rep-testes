import Head from 'next/head'
import CountryCard from '../components/CountryCard'
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
			<section className='flex flex-wrap items-center justify-evenly gap-10 py-5 px-5 sm:px-10 dark:text-white dark:bg-gray-800'>
				{data.map((country: any, index: number) => (
					<CountryCard key={index} {...country} />
				))}
			</section>
		</>
	)
}

export default Home
