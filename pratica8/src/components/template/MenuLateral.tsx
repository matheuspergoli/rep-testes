import React from 'react'
import { IconeAjustes, IconeCasa, IconeSino } from '../Icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

function MenuLateral() {
	return (
		<aside>
			<div className='flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800'>
				<Logo />
			</div>
			<ul>
				<MenuItem url='/' texto='Início' icone={IconeCasa} />
				<MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
				<MenuItem url='/notificacoes' texto='Notificações' icone={IconeSino} />
			</ul>
		</aside>
	)
}

export default MenuLateral
