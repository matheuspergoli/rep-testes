import Head from 'next/head'
import { GetStaticProps } from 'next'
import getPosts from '../service/getPosts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['posts'], getPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

function Home() {
	const { data, status } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

	if (status === 'loading') return <h1 className='text-3xl font-bold'>Carregando...</h1>
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-2'>
				<h1 className='text-3xl font-bold mb-5'>Meus posts</h1>
				<div className='flex flex-col gap-5'>
					{data?.allPosts.map((post) => (
						<section key={post.id} className='max-w-sm border rounded-md p-2'>
							<h2 className='text-xl'>{post.title}</h2>
							<p>{post.content}</p>
						</section>
					))}
				</div>
			</main>
		</>
	)
}

export default Home
