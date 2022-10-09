import Link from 'next/link'

function Estatico2() {
	return (
		<main>
			<h1 className='text-3xl font-bold mb-5'>Estático #02</h1>
			<Link href='/'>
				<a className='text-xl underline'>Voltar</a>
			</Link>
		</main>
	)
}

export default Estatico2
