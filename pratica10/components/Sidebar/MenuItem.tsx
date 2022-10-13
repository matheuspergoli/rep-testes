import React from 'react'
import Link from 'next/link'

interface MenuItemProps {
	url: string
	texto: string
	icone: any
}

function MenuItem(props: MenuItemProps) {
	return (
		<Link href={props.url} passHref>
			<li className='w-20 h-16 p-2 flex flex-col items-center cursor-pointer hover:bg-gray-300'>
				{props.icone}
				<span className='text-xs'>{props.texto}</span>
			</li>
		</Link>
	)
}

export default MenuItem
