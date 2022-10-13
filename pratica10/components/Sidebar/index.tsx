import { IconeHome, IconeAjustes, IconeSino, IconeSair } from '../../icons'
import ButtonDarkMode from './ButtonDarkMode'
import Logo from './Logo'
import MenuItem from './MenuItem'
import MenuItemLogout from './MenuItemLogout'

function Sidebar() {
	return (
		<aside className='flex flex-col w-20 h-screen bg-white dark:bg-gray-900'>
			<Logo />
			<ul className='flex flex-col gap-2 flex-grow'>
				<MenuItem url='/' icone={IconeHome(6)} texto='Início' />
				<MenuItem url='/ajustes' icone={IconeAjustes(6)} texto='Ajustes' />
				<MenuItem url='/notificacoes' icone={IconeSino(6)} texto='Notificações' />
				<ButtonDarkMode />
			</ul>
			<ul>
				<MenuItemLogout icone={IconeSair(6)} texto='Sair' />
			</ul>
		</aside>
	)
}

export default Sidebar
