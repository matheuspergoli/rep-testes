import Head from 'next/head'
import parse from 'html-react-parser'
import { GetServerSideProps } from 'next'
import getAllPosts from '../service/getAllPosts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
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

	const heroPost = data?.allPosts[0]
	const morePosts = data?.allPosts.slice(1)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='max-w-8xl mx-auto'>
				<h2 className='text-7xl font-bold mb-10'>Blog.</h2>
				<article className='mb-28'>
					<img src={heroPost?.coverImage.url} alt='Post cover' className='mb-10' />
					<div className='grid grid-cols-2 gap-10'>
						<h1 className='text-4xl'>{heroPost?.title}</h1>
						<section>
							<p className='text-2xl mb-5'>{heroPost?.excerpt}</p>
							<div className='flex items-center gap-5'>
								<img src={heroPost?.author.picture.url} alt='Author image' className='w-12 h-12 rounded-full' />
								<p className='text-lg font-bold'>{heroPost?.author.name}</p>
							</div>
						</section>
					</div>
				</article>
				<div className='grid grid-cols-2 gap-20'>
					{morePosts?.map((post) => (
						<section key={post.id} className='max-w-2xl w-full mx-auto'>
							<img src={post.coverImage.url} alt='Post image' className='mb-3 w-full object-cover h-80' />
							<h2 className='text-2xl mb-3'>{post.title}</h2>
							<h3 className='text-lg mb-3'>{post.excerpt}</h3>
							<div className='flex items-center gap-5'>
								<img src={post.author.picture.url} alt='Author image' className='w-12 h-12 rounded-full' />
								<p className='text-lg font-bold'>{post.author.name}</p>
							</div>
						</section>
					))}
				</div>
			</main>
		</>
	)
}

export default Home
