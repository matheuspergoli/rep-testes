import React from 'react'
import { BsSearch as SearchIcon } from 'react-icons/bs'
import { SearchContext } from '../../context/searchContext'

export const SearchInput = () => {
	const { search, setSearch } = React.useContext(SearchContext)

	return (
		<div className='flex w-full items-center gap-2 rounded-md border px-5 shadow-md dark:border-dark-blue dark:bg-dark-blue dark:shadow-none sm:max-w-md'>
			<SearchIcon className='text-xl dark:text-white' />
			<input
				type='search'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Search for a country...'
				className='w-full p-4 outline-none dark:bg-dark-blue dark:text-white'
			/>
		</div>
	)
}
