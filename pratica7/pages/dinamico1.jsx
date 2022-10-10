import Link from 'next/link'

export function getServerSideProps() {
	return {
		props: {
			numero: Math.floor(Math.random() * 100)
		}
	}
}

function Dinamico1(props) {
	return (
		<main>
			<h1 className='text-3xl font-bold mb-5'>Dinâmico #01</h1>
			<p className='text-red-600'>Número: {props.numero}</p>
			<Link href='/'>
				<a className='text-xl underline'>Voltar</a>
			</Link>
		</main>
	)
}

export default Dinamico1
