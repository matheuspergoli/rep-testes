import React from 'react'
import Link from 'next/link'
import { DarkModeContext } from '../../context/DarkModeContext'
import { HiMoon as MoonIcon, HiSun as SunIcon } from 'react-icons/hi'

function Navbar() {
	const { darkMode, setDarkMode } = React.useContext(DarkModeContext)

	return (
		<header className='flex items-center justify-between px-10 py-5 shadow-md dark:text-white dark:bg-gray-700'>
			<Link href='/' className='block w-fit'>
				<h1 className='text-xl font-bold'>Where in the world?</h1>
			</Link>
			{darkMode ? (
				<button className='flex items-center gap-1' onClick={() => setDarkMode(false)}>
					<SunIcon className='text-xl' /> Light Mode
				</button>
			) : (
				<button className='flex items-center gap-1' onClick={() => setDarkMode(true)}>
					<MoonIcon className='text-xl' /> Dark Mode
				</button>
			)}
		</header>
	)
}

export default Navbar
