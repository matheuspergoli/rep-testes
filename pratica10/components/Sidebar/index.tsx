import { IconeHome, IconeAjustes, IconeSino, IconeSair, IconeLogo } from '../../icons'
import MenuItem from './MenuItem'
import MenuItemLogout from './MenuItemLogout'

function Sidebar() {
	return (
		<aside className='flex flex-col w-20 h-screen bg-white dark:bg-gray-900'>
			<div className='bg-gray-800 text-white dark:bg-gray-800 dark:text-gray-500'>
				{IconeLogo(6)}
			</div>
			<ul className='flex flex-col gap-2 flex-grow'>
				<MenuItem url='/' icone={IconeHome(6)} texto='Início' />
				<MenuItem url='/ajustes' icone={IconeAjustes(6)} texto='Ajustes' />
				<MenuItem url='/notificacoes' icone={IconeSino(6)} texto='Notificações' />
			</ul>
			<ul>
				<MenuItemLogout icone={IconeSair(6)} texto='Sair' />
			</ul>
		</aside>
	)
}

export default Sidebar
