import React from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import { IconeLua, IconeSol } from '../../icons'

function ButtonDarkMode() {
	const { darkMode, setDarkMode } = React.useContext(DarkModeContext)

	function changeMode() {
		if (darkMode === 'dark') setDarkMode('')
		if (darkMode === '') setDarkMode('dark')
	}

	return (
		<button
			className='mt-10 w-20 h-16 p-2 flex flex-col items-center text-xs cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 dark:text-white'
			onClick={changeMode}>
			{darkMode === 'dark' ? IconeSol(6) : IconeLua(6)}
			{darkMode === 'dark' ? 'Light mode' : 'Dark mode'}
		</button>
	)
}

export default ButtonDarkMode
