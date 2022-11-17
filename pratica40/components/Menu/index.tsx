import Link from 'next/link'

function Menu() {
	return (
		<header className='p-3 bg-main-black'>
			<nav className='flex items-center gap-4 text-2xl text-white'>
				<Link href='/'>Home</Link>
				<Link href='/sobre'>Sobre</Link>
			</nav>
		</header>
	)
}

export default Menu
