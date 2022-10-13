import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Conteudo from '../Conteudo'
import Sidebar from '../Sidebar'
import { DarkModeContext } from '../../context/DarkModeContext'
import { UserLoggedContext } from '../../context/UserLoggedContext'

interface LayoutProps {
	children: ReactNode
}

function Layout(props: LayoutProps) {
	const router = useRouter()
	const { user } = React.useContext(UserLoggedContext)
	const { darkMode } = React.useContext(DarkModeContext)

	React.useEffect(() => {
		if (!user?.email) router.push('/autenticacao')
	}, [router, user])

	return (
		<main className={`${darkMode} flex`}>
			<Sidebar />
			<Conteudo>{props.children}</Conteudo>
		</main>
	)
}

export default Layout
