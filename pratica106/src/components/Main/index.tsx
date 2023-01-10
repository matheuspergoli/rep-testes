import React from 'react'
import { Input } from '../Input'
import { useQuery } from 'react-query'
import { getCountries } from '../../services'
import { CountryCard } from '../../components/CountryCard'
import { SearchContext } from '../../context/searchContext'

export const Main = () => {
	const { search } = React.useContext(SearchContext)

	const { data, status } = useQuery<Country[]>(['countries'], getCountries)

	function handleSearch(data: Array<Country>) {
		return search ? data.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())) : data
	}

	if (status === 'loading') {
		return (
			<main className='container mx-auto grid grid-cols-1 gap-16 px-3 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 xl:grid-cols-4'>
				<h1 className='text-2xl font-bold'>Loading...</h1>
			</main>
		)
	}
	return (
		<>
			<Input />
			<main className='container mx-auto grid grid-cols-1 gap-16 px-3 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 xl:grid-cols-4'>
				{search
					? handleSearch(data as Country[]).map((country) => (
							<CountryCard key={country.name.common} country={country} />
					  ))
					: data?.map((country) => <CountryCard key={country.name.common} country={country} />)}
			</main>
		</>
	)
}
