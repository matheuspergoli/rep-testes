import Head from 'next/head'
import { GetStaticProps } from 'next'
import getAllCountries from '../service/getAllCountries'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['countries'], getAllCountries)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['countries'], queryFn: getAllCountries })

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-3'>
				<h1 className='text-4xl font-bold mb-5'>Countries</h1>
				{data?.countries.map((country) => (
					<section key={country.name} className='max-w-2xl border rounded-md p-3 mb-5'>
						<h2 className='text-2xl font-semibold'>País: {country.name}</h2>
						<h3 className='text-xl font-semibold'>Capital: {country.capital}</h3>
						<h3 className='text-xl font-semibold'>Continente: {country.continent.name}</h3>
					</section>
				))}
			</main>
		</>
	)
}

export default Home
