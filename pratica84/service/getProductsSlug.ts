import { GraphQLClient, gql } from 'graphql-request'

interface ProductSlug {
	slug: string
}

const query = gql`
	query {
		allProducts {
			slug
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

export const getProductsSlug = async (): Promise<ProductSlug[]> => {
	const data = await graphQLClient.request(query)
	return data.allProducts
}
