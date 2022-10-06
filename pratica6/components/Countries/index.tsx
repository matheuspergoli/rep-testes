import React from 'react'
import Country from './Country'

interface CountryData {
	capital: []
	region: string
	population: number
	flags: { png: string }
	name: { common: string; official: string }
}

function Countries({ data }) {
	return (
		<main className='flex flex-wrap justify-evenly items-center gap-10 p-10'>
			{data.map((country: CountryData, index: number) => (
				<Country key={index} country={country} />
			))}
		</main>
	)
}

export default Countries
