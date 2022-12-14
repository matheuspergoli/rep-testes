import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
	const router = useRouter()

	function handleClick() {
		const isConfirmed = confirm('Gostaria de ir para Produtos?')

		if (isConfirmed) {
			router.push('/produtos')
		}
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1 className='mb-5 text-5xl'>Página Home</h1>
				<p className='mb-2 text-2xl'>Essa é a Página Home</p>
				<ul>
					<li>
						<Link href='sobre'>
							<a className='underline'>Ir para Página Sobre</a>
						</Link>
					</li>
					<li>
						<Link href='produtos'>
							<a className='underline'>Ir para Página Produtos</a>
						</Link>
					</li>
				</ul>
				<button
					className='underline my-3 p-2 rounded-md border text-red-600'
					onClick={handleClick}>
					Navegação programatica
				</button>
			</main>
		</>
	)
}

export default Home
