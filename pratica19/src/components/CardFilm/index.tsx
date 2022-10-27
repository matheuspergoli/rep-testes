import React from 'react'
import { Link } from 'react-router-dom'

interface FilmProps {
	id: number
	title: string
	poster_path: string
	vote_average: number
	release_date: string
	backdrop_path: string
}

function CardFilm(props: FilmProps) {
	return (
		<Link to={`/movie/${props.id}`}>
			<section className='flex flex-col items-center justify-center w-60 rounded-md bg-gray-800'>
				<figure className='relative transition hover:scale-105'>
					<img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} className='rounded-md' />
					<div className='flex items-center gap-2 p-2 font-bold absolute top-0 rounded-tl-md text-yellow-400 bg-black'>
						{props.vote_average.toFixed(2)}
					</div>
					<figcaption className='p-5 text-xl text-center transition absolute inset-0 rounded-md opacity-0 bg-black text-white hover:opacity-80'>
						{props.title}
					</figcaption>
				</figure>
			</section>
		</Link>
	)
}

export default CardFilm
