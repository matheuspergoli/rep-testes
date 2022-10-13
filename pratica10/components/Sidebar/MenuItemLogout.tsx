import React from 'react'

interface MenuItemLogoutProps {
	icone: any
	texto: string
}

function MenuItemLogout(props: MenuItemLogoutProps) {
	return (
		<button className='w-20 h-16 p-2 flex flex-col items-center hover:bg-red-500 hover:text-white dark:text-white'>
			{props.icone}
			<span className='text-xs'>{props.texto}</span>
		</button>
	)
}

export default MenuItemLogout
