import Head from 'next/head'
import Link from 'next/link'

function Produtos() {
	return (
		<>
			<Head>
				<title>Produtos</title>
			</Head>
			<main>
				<h1 className='mb-5 text-5xl'>Página Produtos</h1>
				<p className='mb-2 text-2xl'>Essa é a Página Produtos</p>
				<section className='w-fit p-2 border rounded-md'>
					<h2 className='text-2xl'>Ver Produtos</h2>
					<Link href='/produtos/Notebook'>
						<a className='block underline text-red-500'>Notebook</a>
					</Link>
					<Link href='/produtos/Computador'>
						<a className='block underline text-red-500'>Computador</a>
					</Link>
				</section>
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

export default Produtos
