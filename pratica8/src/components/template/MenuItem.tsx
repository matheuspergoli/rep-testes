import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
	url?: string
	texto: string
	icone: any
	className?: string
	onClick?: () => void
}

function MenuItem(props: MenuItemProps) {
	function renderizarLink() {
		return (
			<a
				className={`flex flex-col justify-center items-center w-20 h-20 text-gray-600 ${props.className}`}>
				{props.icone}
				<span className='text-xs font-light'>{props.texto}</span>
			</a>
		)
	}

	return (
		<li onClick={props.onClick} className='cursor-pointer hover:bg-gray-100'>
			{props.url ? (
				<Link href={props.url}>{renderizarLink()}</Link>
			) : (
				renderizarLink()
			)}
		</li>
	)
}

export default MenuItem
