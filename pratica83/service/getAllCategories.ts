import { GraphQLClient, gql } from 'graphql-request'

interface Props {
	category: {
		id: string
		name: string
		slug: string
	}
}

const query = gql`
	query {
		allProducts {
			category {
				id
				name
				slug
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

export const getAllCategories = async (): Promise<Props[]> => {
	const data = await graphQLClient.request(query)
	return data.allProducts
}
