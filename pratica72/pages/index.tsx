import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllProducts } from '../service/getAllProducts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['products'], getAllProducts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='mx-auto mb-10 grid w-full max-w-7xl grid-cols-4 gap-5'>
				{data?.map((product) => (
					<div
						key={product.id}
						className='rounded-md border bg-white p-2 shadow-md transition hover:-translate-y-2 hover:border-blue-500'>
						<img src={product.image} alt={product.title} className='h-40 w-full max-w-full object-contain' />
						<div className='flex flex-col items-center p-4'>
							<h3 className='text-center text-sm font-semibold'>{product.title}</h3>
						</div>
					</div>
				))}
			</main>
		</>
	)
}

export default Home
