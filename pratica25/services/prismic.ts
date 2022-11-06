import * as Prismic from '@prismicio/client'
import sm from '.././sm.json'

export const repositoryName = Prismic.getRepositoryName(sm.apiEndpoint)