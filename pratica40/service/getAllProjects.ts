import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
	query {
		allProjetos(orderBy: _createdAt_ASC, first: "26") {
			id
			nome
			link
			repositorio
			tecnologias
			imagem {
				url
			}
		}
	}
`

interface Projeto {
	id: string
	link: string
	nome: string
	repositorio: string
	tecnologias: string
	imagem: {
		url: string
	}
}

interface Projetos {
	allProjetos: Array<Projeto>
}

async function getAllProjects() {
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
		}
	})
	return (await graphQLClient.request(query)) as Projetos
}

export default getAllProjects
