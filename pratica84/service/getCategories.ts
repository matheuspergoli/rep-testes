import { GraphQLClient, gql } from 'graphql-request'

interface ProductCategory {
	id: string
	name: string
}

const query = gql`
	query {
		allCategories {
			id
			name
		}
	}
`

const endpoint = 'https://graphql.datocms.com/'

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		'Content-Type': 'application/json',
		authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_API_KEY}`
	}
})

export const getCategories = async (): Promise<ProductCategory[]> => {
	const data = await graphQLClient.request(query)
	return data.allCategories
}
