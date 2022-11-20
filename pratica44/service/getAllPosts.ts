import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

const query = gql`
	query {
		allPosts(orderBy: _createdAt_ASC) {
			id
			title
			content
		}
	}
`

async function getAllPosts() {
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + API_KEY
		}
	})
	return (await graphQLClient.request(query)) as Posts
}

export default getAllPosts
