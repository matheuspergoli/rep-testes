import { GetStaticProps } from 'next'
import { gql, GraphQLClient } from 'graphql-request'

const query = gql`
	query {
		allPosts {
			id
			title
			content
		}
	}
`

export const getStaticProps: GetStaticProps = async () => {
	const API_KEY = process.env.PUBLIC_API_KEY
	const endpoint = 'https://graphql.datocms.com/'
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'content-type': 'application/json',
			authorization: 'Bearer ' + API_KEY
		}
	})
	const posts = await graphQLClient.request(query)
	return {
		props: { data: posts },
		revalidate: 10
	}
}

interface Post {
	id: number
	title: string
	content: string
}

interface HomeProps {
	data: {
		allPosts: Array<Post>
	}
}

function Home(props: HomeProps) {
	console.log(props.data.allPosts)

	return (
		<main>
			{props.data.allPosts.map((post) => (
				<section key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
				</section>
			))}
		</main>
	)
}

export default Home
