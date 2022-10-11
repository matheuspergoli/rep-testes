import React from 'react'
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../Icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

function MenuLateral() {
	return (
		<aside className='flex flex-col dark:bg-gray-900 dark:text-gray-200'>
			<div className='flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800'>
				<Logo />
			</div>
			<ul className='flex-grow'>
				<MenuItem url='/' texto='Início' icone={IconeCasa} />
				<MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
				<MenuItem url='/notificacoes' texto='Notificações' icone={IconeSino} />
			</ul>
			<ul>
				<MenuItem
					onClick={() => console.log('Logout')}
					texto='Sair'
					icone={IconeSair}
					className='hover:bg-red-400 hover:text-white text-red-600 dark:text-red-400 dark:hover:text-white'
				/>
			</ul>
		</aside>
	)
}

export default MenuLateral
