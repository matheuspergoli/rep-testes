import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'
import { client, postQueries } from '../utils/apollo-client'

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query(postQueries)

	return {
		props: { posts: data.allPosts },
		revalidate: 1
	}
}

interface Post {
	id: string
	title: string
	content: string
}

interface HomeProps {
	posts: Array<Post>
}

function Home(props: HomeProps) {
	function revalidate() {
		fetch('/api/revalidate')
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-2'>
				<h1 className='text-3xl font-bold mb-5'>Meus Posts</h1>
				<button className='p-2 rounded-md mb-5 text-white bg-black' onClick={revalidate}>
					Revalidate
				</button>
				<div className='flex flex-col gap-5'>
					{props.posts.map((post) => (
						<section key={post.id} className='max-w-sm w-full border rounded-md p-2'>
							<h1 className='text-xl font-semibold'>{post.title}</h1>
							<p>{post.content}</p>
						</section>
					))}
				</div>
			</main>
		</>
	)
}

export default Home
