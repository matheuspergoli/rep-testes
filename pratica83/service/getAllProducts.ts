import { GraphQLClient, gql } from 'graphql-request'

const query = gql`
	query {
		allProducts {
			id
			name
			slug
			price
			description
			category {
				id
				name
				slug
			}
			image {
				responsiveImage {
					src
				}
			}
		}
	}
`

const endpoint = 'https://graphql.datocms.com/'

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		'Content-Type': 'application/json',
		authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_KEY}`
	}
})

export const getAllProducts = async (): Promise<ProductProps[]> => {
	const data = await graphQLClient.request(query)
	return data.allProducts
}
