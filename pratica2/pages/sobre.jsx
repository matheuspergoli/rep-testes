import Head from 'next/head'
import Link from 'next/link'

function Sobre() {
	return (
		<>
			<Head>
				<title>Sobre</title>
			</Head>
			<main>
				<h1 className='mb-5 text-5xl'>Página Sobre</h1>
				<p className='mb-2 text-2xl'>Essa é a Página Sobre</p>
				<ul>
					<li>
						<Link href='/'>
							<a className='underline'>Ir para Página Home</a>
						</Link>
					</li>
				</ul>
			</main>
		</>
	)
}
export default Sobre
