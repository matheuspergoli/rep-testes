import Head from 'next/head'
import getAllPosts from '../../service/getAllPosts'
import getSinglePost from '../../service/getSinglePost'
import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['post'], getSinglePost)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await getAllPosts()

	const paths = data.allPosts.map((post) => {
		return {
			params: { id: post.slug }
		}
	})

	return { paths, fallback: false }
}

function Post() {
	const { data } = useQuery({ queryKey: ['post'], queryFn: getSinglePost })

	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<main className='p-2'>
				<h1 className='text-3xl font-bold mb-5'>{data?.post.title}</h1>
				<p className='max-w-sm rounded-md border p-2'>{data?.post.content}</p>
			</main>
		</>
	)
}

export default Post
