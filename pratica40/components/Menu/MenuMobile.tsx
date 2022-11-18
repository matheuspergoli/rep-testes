import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi'

function MenuMobile() {
	const router = useRouter()
	const headerRef = React.useRef<any>()

	function showMenu() {
		if (headerRef?.current?.classList.contains('hidden')) {
			headerRef?.current?.classList.remove('hidden')
			headerRef?.current?.classList.add('block')
		} else {
			headerRef?.current?.classList.remove('block')
			headerRef?.current?.classList.add('hidden')
		}
	}

	function closeMenu() {
		headerRef?.current.classList.add('hidden')
	}

	return (
		<>
			<button className='block text-2xl w-fit ml-auto m-3 p-2 rounded-md md:hidden bg-main-black' onClick={showMenu}>
				<MenuIcon className='text-white' />
			</button>
			<header className='hidden absolute right-3 p-3 transition rounded-md md:hidden bg-main-black' ref={headerRef}>
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
