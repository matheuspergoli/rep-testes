import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
	uri: 'https://graphql.datocms.com/',
	cache: new InMemoryCache(),
	headers: {
		'Content-Type': 'application/json',
		authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
	},
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache'
		}
	}
})

export const postQueries = {
	query: gql`
		query {
			allPosts {
				id
				title
				content
			}
		}
	`
}
