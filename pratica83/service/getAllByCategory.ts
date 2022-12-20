import { GraphQLClient, gql } from 'graphql-request'

const query = gql`
	query ($eq: ItemId = "") {
		allProducts(filter: { category: { eq: $eq } }) {
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

export const getAllByCategory = async (categoryId: string): Promise<ProductProps[]> => {
	const variables = { eq: categoryId }
	const data = await graphQLClient.request(query, variables)
	return data.allProducts
}
