import { ReactNode } from 'react'
import Conteudo from '../Conteudo'
import Sidebar from '../Sidebar'

interface LayoutProps {
	children: ReactNode
}

function Layout(props: LayoutProps) {
	return (
		<main className='dark flex'>
			<Sidebar />
			<Conteudo>{props.children}</Conteudo>
		</main>
	)
}

export default Layout
