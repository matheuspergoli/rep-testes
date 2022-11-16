import Head from 'next/head'
import getSinglePost from '../../service/getSinglePost'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const queryClient = new QueryClient()
	const id = JSON.stringify(context?.params?.id)

	await queryClient.prefetchQuery(['post', id], () => getSinglePost(id))

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			id
		}
	}
}

function Post(props: { id: string }) {
	const { data } = useQuery({ queryKey: ['post', props.id], queryFn: () => getSinglePost(props.id) })

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
