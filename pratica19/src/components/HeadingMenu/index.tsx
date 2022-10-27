import React from 'react'
import { Link } from 'react-router-dom'
import { IconFilm } from '../Icons'

function HeadingMenu() {
	return (
		<header className='flex items-center justify-between gap-5 px-4 py-2 bg-black md:justify-start md:gap-20'>
			<Link to='/'>
				<div className='flex items-center'>
					{IconFilm}
					<h1 className='text-2xl font-bold text-gray-300'>React Movies</h1>
				</div>
			</Link>
			<div className='text-white'>
				<Link to='/trending' className='text-lg font-semibold'>Trending</Link>
			</div>
		</header>
	)
}

export default HeadingMenu
