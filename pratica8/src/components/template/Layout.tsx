import React from 'react'
import { AppContext } from '../../data/context/AppContext'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'

interface LayoutProps {
	titulo: string
	subtitulo: string
	children?: any
}

function Layout(props: LayoutProps) {
	const { tema } = React.useContext(AppContext)

	return (
		<div className={`${tema} flex h-screen w-screen`}>
			<MenuLateral />
			<div className='flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800'>
				<Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
				<Conteudo>{props.children}</Conteudo>
			</div>
		</div>
	)
}

export default Layout
