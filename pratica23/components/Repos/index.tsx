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
	const { data: session } = useSession()
	const { data } = useQuery(['repos'], getRepos)

	async function getRepos() {
		const name = session?.user?.name?.toLowerCase().replace(' ', '')
		const response = await fetch(`https://api.github.com/users/${name}/repos`)
		const json = await response.json()
		return json as RepoProps[]
	}

	if (data) console.log(data)

	return (
		<section>
			{data?.map((repo) => (
				<div key={repo.id} className='m-5 p-2 border w-fit'>
					<a href={repo.html_url} target='_blank' rel='noreferrer' className='flex items-center gap-1'>
						Repo: {repo.name} <LinkIcon className='text-xl' />
					</a>
					<p>Descrição: {repo.description}</p>
				</div>
			))}
		</section>
	)
}

export default Repos
