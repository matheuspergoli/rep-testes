import Head from 'next/head'
import getPost from '../../service/getPost'
import getPostSlugs from '../../service/getPostSlugs'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const queryClient = new QueryClient()
	const id = context?.params?.id as string

	await queryClient.prefetchQuery(['post'], () => getPost(id))

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			id: id
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getPostSlugs()).allPosts.map((post) => {
		return {
			params: { id: post.slug }
		}
	})

	return {
		paths,
		fallback: false
	}
}

function PostPage(props: { id: string }) {
	const { data } = useQuery({ queryKey: ['post'], queryFn: () => getPost(props.id) })

	console.log(data)

	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<main>
				<h1>{data?.post.author.name}</h1>
				<h2>{data?.post.title}</h2>
			</main>
		</>
	)
}

export default PostPage
