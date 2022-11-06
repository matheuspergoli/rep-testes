import React from 'react'
import Navbar from '../Navbar'
import { DarkModeContext } from '../../context/DarkModeContext'

function Layout(props: { children: React.ReactNode }) {
	const { darkMode } = React.useContext(DarkModeContext)

	return (
		<main className={darkMode ? 'dark' : ''}>
			<Navbar />
			{props.children}
		</main>
	)
}

export default Layout
