import React from 'react'
import { Link } from 'react-router-dom'

interface CountryData {
	country: Country
}

export const CountryCard = (props: CountryData) => {
	return (
		<Link to={`/country/${props.country.name.common}`} className='mx-auto block w-full'>
			<section className='rounded-md shadow-md dark:bg-dark-blue'>
				<figure className=''>
					<img
						loading='lazy'
						className='h-[200px] w-full rounded-t-md'
						src={props.country.flags.png}
						alt={props.country.name.common}
					/>
				</figure>
				<article className='px-6 pt-5 pb-9 text-gray-600 dark:text-white'>
					<h2 className='mb-5 text-xl font-bold'>{props.country.name.common}</h2>
					<p>
						<span className='font-semibold'>Population:</span> {props.country.population.toLocaleString()}
					</p>
					<p>
						<span className='font-semibold'>Region:</span> {props.country.region}
					</p>
					<p>
						<span className='font-semibold'>Capital:</span> {props.country.capital}
					</p>
				</article>
			</section>
		</Link>
	)
}
