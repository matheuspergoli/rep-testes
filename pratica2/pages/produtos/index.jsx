import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Produtos() {
	const [data, setData] = React.useState()

	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/produtos')
			const json = await response.json()
			setData(json)
		}
		fetchData()
	}, [])

	console.log(data)

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
					{data &&
						data.map((produto) => (
							<Link key={produto.id} href={`/produtos/${produto.produto}`}>
								<a className='block underline text-red-500'>
									{produto.produto}
								</a>
							</Link>
						))}
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
