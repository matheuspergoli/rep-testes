import React from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
	const { theme, changeTheme } = React.useContext(ThemeContext)

	return (
		<main className='p-3'>
			<h1 className='font-bold mb-5 text-2xl'>
				Theme: {theme === 'dark' ? 'Dark' : 'Light'}
			</h1>
			<button
				className='rounded-md bg-blue-500 hover:bg-blue-600 transition px-3 py-2 text-white'
				onClick={() => changeTheme()}>
				Change Theme
			</button>
		</main>
	)
}

export default App
