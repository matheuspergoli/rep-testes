import Menu from './Menu'
import MenuMobile from './MenuMobile'
import useMedia from '../../hooks/useMedia'

function Navbar() {
	const isDesktop = useMedia('(min-width: 768px)')

	return <>{isDesktop ? <Menu /> : <MenuMobile />}</>
}

export default Navbar
