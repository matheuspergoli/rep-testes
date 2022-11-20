import Head from 'next/head'
import { GetStaticProps } from 'next'
import getAllPosts from '../service/getAllPosts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['posts'], getAllPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['posts'], queryFn: getAllPosts })

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-3'>
				<h1 className='text-4xl font-bold mb-5'>Posts</h1>
				{data?.allPosts.map((post) => (
					<section key={post.id} className='max-w-sm border p-2 rounded-md mb-5'>
						<h2 className='text-2xl font-semibold'>{post.title}</h2>
						<p className='text-xl'>{post.content}</p>
					</section>
				))}
			</main>
		</>
	)
}

export default Home
