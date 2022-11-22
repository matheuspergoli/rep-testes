import Head from 'next/head'
import Post from '../components/Post'
import { GetServerSideProps } from 'next'
import MainTitle from '../layout/MainTitle'
import HeroPost from '../components/HeroPost'
import getAllPosts from '../service/getAllPosts'
import MainContainer from '../layout/MainContainer'
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
			<MainContainer>
				<MainTitle>Blog.</MainTitle>
				{heroPost ? <HeroPost {...heroPost} /> : null}
				<h2 className='text-center text-5xl font-bold mb-20 sm:text-left sm:text-7xl'>Mais artigos</h2>
				<div className='grid grid-cols-1 gap-20 lg:grid-cols-2'>
					{morePosts?.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</div>
			</MainContainer>
		</>
	)
}

export default Home