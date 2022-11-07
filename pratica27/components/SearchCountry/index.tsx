import React from 'react'
import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi'

function SearchCountry() {
	return (
		<div className='flex pl-7 py-3 mt-10 gap-2 max-w-md w-full border rounded-md shadow-md bg-white dark:bg-gray-700 dark:border-none'>
			<SearchIcon className='text-2xl text-black dark:text-white' />
			<input type='search' name='search' id='search' placeholder='Search for a country...' className='rounded-md outline-none w-full bg-white dark:bg-gray-700' />
		</div>
	)
}

export default SearchCountry
