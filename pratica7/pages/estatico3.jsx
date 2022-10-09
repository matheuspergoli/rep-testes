import Link from 'next/link'

export function getStaticProps() {
	return {
    revalidate: 2,
		props: { numero: Math.floor(Math.random() * 100) }
	}
}

function Estatico3(props) {
	return (
		<main>
			<h1 className='text-3xl font-bold mb-5'>Estático #03</h1>
			<p className='text-red-600'>Numero: {props.numero}</p>
			<Link href='/'>
				<a className='text-xl underline'>Voltar</a>
			</Link>
		</main>
	)
}

export default Estatico3
