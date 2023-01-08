import React from 'react'
import { useQuery } from 'react-query'
import { getCountries } from '../../services'
import { CountryCard } from '../../components/CountryCard'

export const Main = () => {
	const { data } = useQuery<Country[]>(['countries'], getCountries)

	return (
		<main className='container mx-auto grid grid-cols-1 gap-16 px-3 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 xl:grid-cols-4'>
			{data?.map((country) => (
				<CountryCard key={country.name.common} country={country} />
			))}
		</main>
	)
}
