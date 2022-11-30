import Head from 'next/head'
import type { RootState } from '../store'
import { contadorActions } from '../store/contador'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
	const dispatch = useDispatch()
	const contador = useSelector((state: RootState) => state.contador.value)
	const { increment, decrement } = contadorActions

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='p-3'>
				<h1 className='mb-5 text-4xl font-semibold'>Contador</h1>
				<div className='flex items-center gap-5'>
					<button className='rounded-md bg-blue-500 px-3 py-2 font-semibold hover:bg-blue-600' onClick={() => dispatch(increment())}>
						Incrementar
					</button>
					<button className='text-2xl'>{contador}</button>
					<button
						className='rounded-md bg-blue-500 px-3 py-2 font-semibold hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50'
						onClick={() => dispatch(decrement())}
						disabled={contador === 0}>
						Decrementar
					</button>
				</div>
			</main>
		</>
	)
}

export default Home
