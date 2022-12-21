import { GraphQLClient, gql } from 'graphql-request'

interface Product {
	name: string
	price: number
	description: string
	mainImage: {
		url: string
	}
	category: {
		id: string
		name: string
	}
}

const query = gql`
	query ($slug: SlugFilter = { eq: "" }) {
		product(filter: { slug: $slug }) {
			name
			price
			description
			mainImage {
				url
			}
			category {
				id
				name
			}
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

export const getSingleProduct = async (slug: string): Promise<Product> => {
	const variables = { slug: { eq: slug } }
	const data = await graphQLClient.request(query, variables)
	return data.product
}
