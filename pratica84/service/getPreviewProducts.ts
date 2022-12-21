import { GraphQLClient, gql } from 'graphql-request'

interface PreviewProduct {
	id: string
	name: string
	slug: string
	price: number
	exercpt: string
	category: {
		id: string
		name: string
	}
	coverImage: {
		url: string
	}
}

const query = gql`
	query {
		allProducts {
			id
			name
			slug
			price
			exercpt
			category {
				id
				name
			}
			coverImage {
				url
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

export const getPreviewProducts = async (): Promise<PreviewProduct[]> => {
	const data = await graphQLClient.request(query)
	return data.allProducts
}
