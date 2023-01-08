import React from 'react'
import { HiMoon as IconeDarkMode } from 'react-icons/hi'
import { DarkModeContext } from '../../context/darkModeContext'
import { BsFillSunFill as IconeLightMode } from 'react-icons/bs'

export const Header = () => {
	const { darkMode, changeTheme } = React.useContext(DarkModeContext)

	return (
		<header className='mb-12 py-6 shadow-md dark:bg-dark-blue'>
			<section className='container mx-auto flex items-center justify-between px-3 sm:px-0'>
				<h1 className='text-lg font-semibold dark:text-white sm:text-3xl'>Where in the World?</h1>
				<button className='flex items-center gap-1 text-sm dark:text-white sm:text-base' onClick={() => changeTheme()}>
					{darkMode === 'dark' ? <IconeLightMode className='text-xl' /> : <IconeDarkMode className='text-xl' />}
					{darkMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
				</button>
			</section>
		</header>
	)
}
