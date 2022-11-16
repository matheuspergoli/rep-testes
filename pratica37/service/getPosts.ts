import { gql, GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
	query {
		allPosts {
			id
			title
			content
		}
	}
`

interface Post {
	id: string
	title: string
	content: string
}

interface DataProps {
	allPosts: Array<Post>
}

async function getPosts() {
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'content-type': 'application/json',
			authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
		}
	})
	return (await graphQLClient.request(query)) as DataProps
}

export default getPosts
