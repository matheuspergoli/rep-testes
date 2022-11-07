import React from 'react'
import Link from 'next/link'
import { DarkModeContext } from '../../context/DarkModeContext'
import { HiMoon as MoonIcon, HiSun as SunIcon } from 'react-icons/hi'

function Navbar() {
	const { darkMode, setDarkMode } = React.useContext(DarkModeContext)

	function changeTheme() {
		const novoTema = darkMode === '' ? 'dark' : ''
		setDarkMode(novoTema)
		localStorage.setItem('tema', novoTema)
	}

	return (
		<header className='flex items-center justify-between px-3 py-5 shadow-md sm:px-10 dark:text-white dark:bg-gray-700'>
			<Link href='/' className='block w-fit'>
				<h1 className='text-lg font-bold sm:text-xl'>Where in the world?</h1>
			</Link>
			{darkMode === 'dark' ? (
				<button className='flex items-center gap-1' onClick={changeTheme}>
					<SunIcon className='text-xl' /> Light Mode
				</button>
			) : (
				<button className='flex items-center gap-1' onClick={changeTheme}>
					<MoonIcon className='text-xl' /> Dark Mode
				</button>
			)}
		</header>
	)
}

export default Navbar
