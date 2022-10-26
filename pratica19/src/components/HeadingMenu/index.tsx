import React from 'react'
import { IconFilm } from '../Icons'

function HeadingMenu() {
	return (
		<header className='px-3 py-1 bg-black'>
			<div className='flex items-center'>
				{IconFilm}
				<h1 className='text-2xl font-bold text-gray-300'>React Movies</h1>
			</div>
		</header>
	)
}

export default HeadingMenu
