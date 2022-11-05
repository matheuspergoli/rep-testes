import { dehydrate, QueryClient, useQuery } from 'react-query'

async function getCountries() {
	const response = await fetch('https://restcountries.com/v3.1/all')
	const json = await response.json()
	return json
}

export async function getServerSideProps() {
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

	if (data) console.log(data)

	return (
		<main>
			<h1>NextJS App</h1>
		</main>
	)
}

export default Home
