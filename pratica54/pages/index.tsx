import Head from 'next/head'
import useCountStore from '../store'

function Home() {
	const { count, increment, decrement } = useCountStore((state) => state)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='flex items-center gap-5 p-3'>
				<button className='rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-600' onClick={increment}>
					Incrementar
				</button>
				<h1 className='text-xl font-bold'>Contador: {count}</h1>
				<button className='rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-600' onClick={decrement}>
					Decrementar
				</button>
			</main>
		</>
	)
}

export default Home
