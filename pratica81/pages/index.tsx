import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Home() {
	const state = useSelector((state) => state)
	const dispatch = useDispatch()
	console.log(state)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='p-3'>
				<h1>Total: {state}</h1>
				<button
					className='rounded-md bg-blue-500 px-3 py-2 text-white'
					onClick={() => dispatch({ type: 'INCREMENT' })}>
					Incrementar
				</button>
			</main>
		</>
	)
}

export default Home
