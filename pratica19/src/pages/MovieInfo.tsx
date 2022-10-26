import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { IconStar } from '../components/Icons'

interface FilmProps {
	id: number
	title: string
	backdrop_path: string
	poster_path: string
	vote_average: number
	release_date: string
}

function MovieInfo() {
	const { id } = useParams()
	const { data } = useQuery('movie', fetchMovie)

	async function fetchMovie() {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2d2c631e6606e4874e84c06e798636d9`)
		const json = await response.json()
		return json as FilmProps
	}
	console.log(data)

	return (
		<main>
			<figure className='relative'>
				<img
					className='block w-full h-116 object-cover'
					src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
					alt={data?.title}
				/>
				<div className='flex items-center gap-2 p-2 absolute top-0 text-yellow-400'>
					{IconStar} {data?.vote_average?.toFixed(2)}
				</div>
				<figcaption className='text-2xl p-2 absolute bottom-0 font-bold text-amber-500 bg-black'>{data?.title}</figcaption>
			</figure>
		</main>
	)
}

export default MovieInfo
