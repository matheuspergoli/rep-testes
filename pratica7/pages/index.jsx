import Link from 'next/link'

function Home() {
	return (
		<main>
			<h1 className='text-3xl font-bold mb-5'>NextJS App</h1>
			<Link href='/estatico1'>
				<a className='text-xl underline'>Estático #01</a>
			</Link>
		</main>
	)
}

export default Home
