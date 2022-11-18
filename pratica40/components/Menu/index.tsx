import Menu from './Menu'
import MenuMobile from './MenuMobile'
import useMedia from '../../hooks/useMedia'

function Navbar() {
	const desktop = useMedia('(min-width: 768px)')

	return <>{desktop ? <Menu /> : <MenuMobile />}</>
}

export default Navbar
