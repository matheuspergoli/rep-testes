import Link from 'next/link'

export async function getStaticProps() {
	const response = await fetch('http://localhost:3000/api/produtos')
	const produtos = await response.json()

	return {
		props: { produtos }
	}
}

function Estatico4(props) {
	return (
		<main>
			<h1 className='text-3xl font-bold mb-5'>Estático #04</h1>
			<ul>
				{props.produtos.map((produto) => (
					<li key={produto.id}>
						Produto: {produto.nome} -- Preço: R$ {produto.preco.toFixed(2)}
					</li>
				))}
			</ul>
			<Link href='/'>
				<a className='text-xl underline'>Voltar</a>
			</Link>
		</main>
	)
}

export default Estatico4
