import React from 'react'
import Button from './Button'

interface HeaderProps {
	title: string
}

function Header(props: HeaderProps) {
	return (
		<header className='p-5 bg-gray-900 text-white'>
			<h1 className='text-2xl'>{props.title}</h1>
			<Button text='Clique aqui !' />
		</header>
	)
}

export default Header
