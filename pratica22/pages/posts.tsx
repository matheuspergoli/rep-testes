import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export async function getServerSideProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['posts'], getPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

async function getPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
	const json = response.json()
	return json
}

function Posts() {
	const { data } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

	console.log(data)

	return <div>Posts</div>
}

export default Posts
