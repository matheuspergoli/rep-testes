import Head from 'next/head'
import Link from 'next/link'

function Home() {
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
			</main>
		</>
	)
}

export default Home
