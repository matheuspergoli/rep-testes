import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const defaultOptions = {
	// watchQuery: {
	// 	errorPolicy: 'ignore'
	// 	fetchPolicy: 'no-cache',
	// 	fetchPolicy: 'cache-and-network',
	// },
	query: {
		fetchPolicy: 'no-cache'
		// errorPolicy: 'all'
		// fetchPolicy: 'network-only',
	}
}

const client = new ApolloClient({
	uri: 'https://graphql.datocms.com/',
	cache: new InMemoryCache(),
	defaultOptions,
	headers: {
		'Content-Type': 'application/json',
		authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
	}
})

export const queries = {
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

export default client
