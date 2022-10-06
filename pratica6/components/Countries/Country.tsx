import React from 'react'
import Image from 'next/image'

interface CountryData {
	country: {
		capital: []
		region: string
		population: number
		flags: { png: string }
		name: { common: string; official: string }
	}
}

function Country({ country }: CountryData) {
	const src = country.flags.png

	return (
		<section className='w-72 shadow-md rounded-b-md'>
			<figure className='w-full'>
				<Image
					className='block w-full h-40 rounded-t-md'
					loader={() => src}
					src={src}
					alt='Country Flag'
					width={100}
					height={100}
					layout='responsive'
					unoptimized
					priority
				/>
			</figure>
			<div className='p-4'>
				<h1 className='font-bold text-xl'>{country.name.common}</h1>
				<p className='font-semibold'>
					Population: <span className='font-normal'>{country.population}</span>
				</p>
				<p className='font-semibold'>
					Region: <span className='font-normal'>{country.region}</span>
				</p>
				<p className='font-semibold'>
					Capital: <span className='font-normal'>{country.capital}</span>
				</p>
			</div>
		</section>
	)
}

export default Country
