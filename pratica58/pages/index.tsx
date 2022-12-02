import React from 'react'
import Head from 'next/head'
import { ThemeContext } from '../context/ThemeContext'

function Home() {
	const { theme, changeTheme } = React.useContext(ThemeContext)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-3'>
				<h1 className='mb-5 text-4xl font-semibold'>Theme: {theme === 'dark' ? 'Dark' : 'Light'}</h1>
				<button
					className='rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600 dark:bg-red-500 dark:text-red-100 dark:hover:bg-red-600'
					onClick={() => changeTheme()}>
					Toggle Theme
				</button>
			</main>
		</>
	)
}

export default Home
