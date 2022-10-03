import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps(context) {
	const id = context.query.id

	return {
		props: { id: id }
	}
}

function InfoProduto({ id }) {
	const [data, setData] = React.useState()

	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/produtos')
			const json = await response.json()
			const produto = json.filter((item) => item.produto === id)
			setData(produto[0])
		}
		fetchData()
	}, [id])

	return (
		<>
			<Head>
				<title>{data?.produto}</title>
			</Head>
			<main>
				<h1 className='mb-5 text-5xl'>Página de Informações</h1>
				<p className='mb-2 text-2xl'>
					Essa é a Página de Informações do {data?.produto}
				</p>
				<p className='text-xl text-red-500'>Preço: R${data?.preco}</p>
				<ul>
					<li>
						<Link href='/'>
							<a className='underline'>Ir para Página Home</a>
						</Link>
					</li>
					<li>
						<Link href='/produtos'>
							<a className='underline'>Ir para Página Produtos</a>
						</Link>
					</li>
				</ul>
			</main>
		</>
	)
}

export default InfoProduto
