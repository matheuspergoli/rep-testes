import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps(context) {
  const id = context.query.id

  return {
    props: { id: id }
  }
}

function Produto({ id }) {
	return (
		<>
			<Head>
				<title>{id}</title>
			</Head>
			<main>
				<h1 className='mb-5 text-5xl'>Página {id}</h1>
				<p className='mb-2 text-2xl'>Essa é a Página {id}</p>
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

export default Produto
