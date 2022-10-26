import React from 'react'

interface FilmProps {
	id: number
	title: string
	backdrop_path: string
	poster_path: string
	vote_average: number
	release_date: string
}

function CardFilm(props: FilmProps) {
	return (
		<section className='flex flex-col items-center justify-center w-60 bg-gray-800'>
			<figure className='relative transition hover:scale-105'>
				<img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} />
				<figcaption className='p-5 text-xl text-center transition absolute inset-0 opacity-0 bg-black text-white hover:opacity-80'>
					{props.title}
				</figcaption>
			</figure>
		</section>
	)
}

export default CardFilm
