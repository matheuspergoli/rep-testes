import { GraphQLClient, gql } from 'graphql-request'

interface Props {
	id: string
	name: string
	slug: string
	price: number
	description: string
	category: {
		id: string
		name: string
		slug: string
	}
	image: {
		responsiveImage: {
			src: string
		}
	}
}

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

export const getAllByCategory = async (category: string): Promise<Props[]> => {
	const variables = { eq: category }
	const data = await graphQLClient.request(query, variables)
	return data.allProducts
}
