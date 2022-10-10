import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
	url: string
	texto: string
	icone: any
}

function MenuItem(props: MenuItemProps) {
	return (
		<li className='hover:bg-gray-100'>
			<Link href={props.url}>
				<a className='flex flex-col justify-center items-center w-20 h-20'>
					{props.icone}
					<span className='text-xs font-light text-gray-600'>
						{props.texto}
					</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
