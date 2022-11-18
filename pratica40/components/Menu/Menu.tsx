import Link from 'next/link'
import { useRouter } from 'next/router'

function Menu() {
	const router = useRouter()

	return (
		<header className='hidden p-3 md:block bg-main-black'>
			<nav className='flex items-center gap-4 text-2xl text-white'>
				<Link href='/' className={router.pathname === '/' ? 'text-main-blue' : ''}>
					Home
				</Link>
				<Link href='/sobre' className={router.pathname === '/sobre' ? 'text-main-blue' : ''}>
					Sobre
				</Link>
				<Link href='/habilidades' className={router.pathname === '/habilidades' ? 'text-main-blue' : ''}>
					Habilidades
				</Link>
				<Link href='/projetos' className={router.pathname === '/projetos' ? 'text-main-blue' : ''}>
					Projetos
				</Link>
				<Link href='/contato' className={router.pathname === '/contato' ? 'text-main-blue' : ''}>
					Contato
				</Link>
				<a href='./curriculo.pdf' download='curriculo'>
					CV
				</a>
			</nav>
		</header>
	)
}

export default Menu
