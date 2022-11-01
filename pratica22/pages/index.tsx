import Head from 'next/head'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export async function getServerSideProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['users'], getUsers)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

async function getUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const json = await response.json()
	return json as DataProps[]
}

interface DataProps {
	id: number
	name: string
	username: string
}

function Home() {
	const { data } = useQuery({ queryKey: ['users'], queryFn: getUsers })

	return (
		<>
			<Head>
				<title>Next App</title>
			</Head>
			<main>
				{data?.map((user) => (
					<section key={user.id}>
						<p>
							Nome: {user.name} - <span className='font-bold'>{user.username}</span>
						</p>
					</section>
				))}
			</main>
		</>
	)
}

export default Home
