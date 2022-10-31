import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
	return (
		<header className='px-4 py-2 mb-5 bg-amber-900'>
			<Link to='/' className='block w-fit'>
				<h1 className='font-bold text-4xl text-amber-500'>The Meal DB</h1>
			</Link>
		</header>
	)
}

export default Menu
