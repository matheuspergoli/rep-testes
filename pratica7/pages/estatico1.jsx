import Link from 'next/link'

function Estatico1() {
	return (
		<>
			<div>
				<h1 className='text-3xl font-bold mb-5'>Estático #01</h1>
			</div>
			<Link href='/'>
				<a className='text-xl underline'>Voltar</a>
			</Link>
		</>
	)
}

export default Estatico1
