import React from 'react'
import Titulo from './Titulo'

interface LayoutProps {
	titulo: string
	children: React.ReactNode
}

function Layout(props: LayoutProps) {
	return (
		<div className='flex flex-col w-2/3 rounded-md bg-white text-gray-800'>
			<Titulo>{props.titulo}</Titulo>
			<div className='p-6'>{props.children}</div>
		</div>
	)
}

export default Layout
