import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

interface Post {
	post: {
		title: string
		content: string
	}
}

async function getSinglePost(variable: string) {
	const query = gql`
		query {
			post(filter: {slug: {eq: ${variable}}}) {
				title
				content
				slug
			}
		}
	`

	const graphQLCLient = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
		}
	})

	return (await graphQLCLient.request(query)) as Post
}

export default getSinglePost
