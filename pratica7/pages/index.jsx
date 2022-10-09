import Link from 'next/link'

function Home() {
	return (
		<main className='flex flex-col gap-2'>
			<h1 className='text-3xl font-bold mb-5'>NextJS App</h1>
			<Link href='/estatico1'>
				<a className='text-xl underline'>Estático #01</a>
			</Link>
			<Link href='/estatico2'>
				<a className='text-xl underline'>Estático #02</a>
			</Link>
			<Link href='/estatico3'>
				<a className='text-xl underline'>Estático #03</a>
			</Link>
		</main>
	)
}

export default Home
