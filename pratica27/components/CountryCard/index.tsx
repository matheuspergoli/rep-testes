import React from 'react'

interface CountryProps {
	name: {
		common: string
		official: string
	}
	region: string
	capital: string
	population: number
	flags: {
		svg: string
	}
}

function CountryCard(props: CountryProps) {
	return (
		<article className='max-w-xs w-full shadow-md rounded-md dark:bg-gray-700'>
			<figure>
				<img src={props.flags.svg} alt={props.name.common} className='w-full h-60 object-cover rounded-tl-md rounded-tr-md' />
			</figure>
			<div className='p-5'>
				<h1 className='mb-4 font-bold text-lg'>{props.name.common}</h1>
				<p>
					<span className='font-bold'>Population:</span> {props.population}
				</p>
				<p>
					<span className='font-bold'>Region:</span> {props.region}
				</p>
				<p>
					<span className='font-bold'>Capital:</span> {props.capital}
				</p>
			</div>
		</article>
	)
}

export default CountryCard
