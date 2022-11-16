import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import getAllPosts from '../service/getAllPosts'
import { HiExternalLink as LinkIcon } from 'react-icons/hi'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['posts'], getAllPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

function Home() {
	const { data } = useQuery({ queryKey: ['posts'], queryFn: getAllPosts })

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-2'>
				<h1 className='text-3xl font-bold mb-5'>Meus posts</h1>
				<div className='flex flex-col gap-5'>
					{data?.allPosts.map((post) => (
						<section key={post.id} className='max-w-sm rounded-md border p-2'>
							<h2 className='text-xl font-bold'>{post.title}</h2>
							<Link href={`/post/${post.slug}`} className='flex items-center gap-2'>
								<p>{post.subTitle}</p>
								<LinkIcon />
							</Link>
						</section>
					))}
				</div>
			</main>
		</>
	)
}

export default Home
