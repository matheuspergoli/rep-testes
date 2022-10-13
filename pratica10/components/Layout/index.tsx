import React, { ReactNode } from 'react'
import Conteudo from '../Conteudo'
import Sidebar from '../Sidebar'
import { DarkModeContext } from '../../context/DarkModeContext'

interface LayoutProps {
	children: ReactNode
}

function Layout(props: LayoutProps) {
	const { darkMode } = React.useContext(DarkModeContext)

	return (
		<main className={`${darkMode} flex`}>
			<Sidebar />
			<Conteudo>{props.children}</Conteudo>
		</main>
	)
}

export default Layout
