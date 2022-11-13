import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer, gql } from 'apollo-server-micro'

async function getCountries() {
	const response = await fetch('https://restcountries.com/v3.1/all')
	const data = await response.json()
	return data
}

const typeDefs = gql`
	type Query {
		sayHello: String
	}
`

const resolvers = {
	Query: {
		sayHello() {
			return 'Hello World'
		}
	}
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/api/graphql')
	res.setHeader('Access-Control-Allow-Methods', 'POST')
	await startServer
	await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export const config = {
	api: {
		bodyParser: false
	}
}
