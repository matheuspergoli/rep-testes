import { GraphQLClient, gql } from 'graphql-request'

interface Props {
	id: string
	name: string
	slug: string
	price: number
	description: string
	image: {
		responsiveImage: {
			src: string
		}
	}
}

const query = gql`
	query ($slug: SlugFilter = { eq: "" }) {
		product(filter: { slug: $slug }) {
			id
			name
			slug
			price
			description
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

export const getProduct = async (slug: string): Promise<Props> => {
	const variables = { slug: { eq: slug } }
	const data = await graphQLClient.request(query, variables)
	return data.product
}
