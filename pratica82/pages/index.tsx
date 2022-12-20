import React from 'react'
import Head from 'next/head'
import { setAge, setName } from '../store/users'
import { useAppSelector, useAppDispatch } from '../hooks/storeHooks'

function Home() {
	const dispatch = useAppDispatch()
	const { name, age } = useAppSelector((state) => state.users)
	const [inputAge, setInputAge] = React.useState(0)
	const [inputName, setInputName] = React.useState('')

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='p-3'>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex flex-col items-center justify-center'>
						<h1 className='text-2xl font-bold'>Name: {name}</h1>
						<input
							type='text'
							className='rounded-md border-2 border-gray-300 p-2'
							value={inputName}
							onChange={(e) => setInputName(e.target.value)}
						/>
						<button
							className='mt-2 rounded-md bg-blue-500 p-2 text-white'
							onClick={() => {
								dispatch(setName(inputName))
								setInputName('')
							}}>
							Change Name
						</button>
					</div>
					<div className='mt-4 flex flex-col items-center justify-center'>
						<h1 className='text-2xl font-bold'>Age: {age}</h1>
						<input
							type='number'
							className='rounded-md border-2 border-gray-300 p-2'
							value={inputAge}
							onChange={(e) => setInputAge(Number(e.target.value))}
						/>
						<button
							className='mt-2 rounded-md bg-blue-500 p-2 text-white'
							onClick={() => {
								dispatch(setAge(inputAge))
								setInputAge(0)
							}}>
							Change Age
						</button>
					</div>
				</div>
			</main>
		</>
	)
}

export default Home
