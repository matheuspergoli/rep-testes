import * as prismic from '@prismicio/client'
import sm from '.././sm.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

const routes = [
	{
		type: 'homepage',
		path: '/'
	}
]

export const createCLient = (config = {}) => {
	const client = prismic.createClient(sm.apiEndpoint, {
		routes,
		...config
	})

	return client
}
