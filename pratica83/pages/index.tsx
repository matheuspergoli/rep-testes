import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllProducts } from '../service'
import { Products } from '../components/Products'
import { QueryClient, dehydrate } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery('products', getAllProducts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

function Home() {
	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>
				<Products />
			</main>
		</>
	)
}

export default Home
