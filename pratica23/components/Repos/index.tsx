import React from 'react'
import { useQuery } from 'react-query'
import { useSession } from 'next-auth/react'
import { HiExternalLink as LinkIcon } from 'react-icons/hi'

interface RepoProps {
	id: number
	name: string
	html_url: string
	description: string
}

function Repos() {
	const [repoPage, setRepoPage] = React.useState(1)
	const { data: session } = useSession()
	const { data, status } = useQuery(['repos', repoPage], getRepos)

	const nextPage = () => setRepoPage((currentPage) => currentPage + 1)
	const prevPage = () => setRepoPage((currentPage) => currentPage - 1)

	async function getRepos() {
		const name = session?.user?.name?.toLowerCase().replace(' ', '')
		const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=15&page=${repoPage}`)
		const json = await response.json()
		return json as RepoProps[]
	}

	if (status === 'loading') return <h1>Carregando...</h1>
	return (
		<section className='flex flex-col gap-5'>
			{data?.map((repo) => (
				<div key={repo.id} className='p-2 border max-w-xl'>
					<a href={repo.html_url} target='_blank' rel='noreferrer' className='flex items-center gap-1 w-fit'>
						{repo.name} <LinkIcon className='text-xl' />
					</a>
					<p>{repo.description}</p>
				</div>
			))}
			{data ? (
				<div className='flex gap-2'>
					<button className='px-5 py-1 rounded-md disabled:opacity-50 bg-gray-700' disabled={repoPage === 1} onClick={prevPage}>
						Prev
					</button>
					<button className='px-5 py-1 rounded-md disabled:opacity-50 bg-gray-700' onClick={nextPage} disabled={data?.length < 15}>
						Next
					</button>
				</div>
			) : null}
		</section>
	)
}

export default Repos
