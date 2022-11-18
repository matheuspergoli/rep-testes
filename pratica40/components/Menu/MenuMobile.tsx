import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdClose as CloseIcon } from 'react-icons/md'
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi'

function MenuMobile() {
	const router = useRouter()
	const [isMenuMobileActive, setIsMenuMobileActive] = React.useState(false)
	const headerRef = React.useRef<any>()

	function showMenu() {
		setIsMenuMobileActive((prev) => !prev)
	}

	function closeMenu() {
		headerRef?.current.classList.add('hidden')
		setIsMenuMobileActive(false)
	}

	return (
		<>
			<button
				className={`${
					isMenuMobileActive ? 'border-main-blue' : ''
				} block border-4 text-2xl w-fit ml-auto m-3 p-2 rounded-md md:hidden bg-main-black`}
				onClick={showMenu}>
				{isMenuMobileActive ? (
					<CloseIcon className={`${isMenuMobileActive ? 'text-main-blue' : 'text-white'}`} />
				) : (
					<MenuIcon className='text-white' />
				)}
			</button>
			<header
				className={`${isMenuMobileActive ? 'block' : 'hidden'} absolute z-50 right-3 p-3 transition rounded-md md:hidden bg-main-black`}
				ref={headerRef}>
				<nav className='flex flex-col items-center gap-4 text-2xl text-white'>
					<Link href='/' className={router.pathname === '/' ? 'text-main-blue' : ''} onClick={closeMenu}>
						Home
					</Link>
					<Link href='/sobre' className={router.pathname === '/sobre' ? 'text-main-blue' : ''} onClick={closeMenu}>
						Sobre
					</Link>
					<Link href='/habilidades' className={router.pathname === '/habilidades' ? 'text-main-blue' : ''} onClick={closeMenu}>
						Habilidades
					</Link>
					<Link href='/projetos' className={router.pathname === '/projetos' ? 'text-main-blue' : ''} onClick={closeMenu}>
						Projetos
					</Link>
					<Link href='/contato' className={router.pathname === '/contato' ? 'text-main-blue' : ''} onClick={closeMenu}>
						Contato
					</Link>
					<a href='./curriculo.pdf' download='curriculo'>
						CV
					</a>
				</nav>
			</header>
		</>
	)
}

export default MenuMobile
