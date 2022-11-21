import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string

const query = gql`
	query {
		countries {
			name
			capital
			continent {
				name
			}
		}
	}
`

async function getAllCountries() {
	const graphQLClient = new GraphQLClient(endpoint)
	return (await graphQLClient.request(query)) as Countries
}

export default getAllCountries
