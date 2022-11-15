import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import client, { queries } from '../service/apollo-client'

export async function getStaticProps() {
	const { data } = await client.query(queries)

	return {
		props: { posts: data }
	}
}

interface Video {
	id: string
	title: string
	content: string
}

interface DataProps {
	posts: {
		allPosts: Array<Video>
	}
}

function Home(props: DataProps) {
	const router = useRouter()

	async function revalidate() {
		await fetch('/api/revalidate')
		router.replace(router.pathname)
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-5'>
				<h1 className='text-3xl font-bold mb-5'>Meus Posts</h1>
				<button className='p-2 mb-5 rounded-md bg-black text-white' onClick={revalidate}>
					Revalidate
				</button>
				<div className='flex flex-col gap-5'>
					{props.posts.allPosts.map((post) => (
						<section key={post.id} className='border max-w-sm p-2'>
							<h2 className='text-xl font-semibold'>{post.title}</h2>
							<p>{post.content}</p>
						</section>
					))}
				</div>
			</main>
		</>
	)
}

export default Home
