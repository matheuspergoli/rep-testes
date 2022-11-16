import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
	query {
		allPosts(orderBy: createdAt_ASC) {
			id
			slug
			title
			subTitle
		}
	}
`

interface Post {
	id: string
	slug: string
	title: string
	subTitle: string
}

interface PostsProps {
	allPosts: Array<Post>
}

async function getAllPosts() {
	const graphQLCLient = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
		}
	})

	return (await graphQLCLient.request(query)) as PostsProps
}

export default getAllPosts
