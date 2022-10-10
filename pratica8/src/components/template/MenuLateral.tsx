import React from 'react'
import { IconeAjustes, IconeCasa, IconeSino } from '../Icons'
import MenuItem from './MenuItem'

function MenuLateral() {
	return (
		<aside>
			<ul>
				<MenuItem url='/' texto='Início' icone={IconeCasa} />
				<MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
				<MenuItem url='/notificacoes' texto='Notificações' icone={IconeSino} />
			</ul>
		</aside>
	)
}

export default MenuLateral
