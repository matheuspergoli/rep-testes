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
		<section className='shadow-sm'>
			<figure className='block w-40 h-40'>
				<Image
					loader={() => src}
					src={src}
					alt='Country Flag'
					width={100}
					height={100}
					layout='responsive'
				/>
			</figure>
			<div className='p-2'>
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
