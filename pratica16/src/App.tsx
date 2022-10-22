import React from 'react'

function App() {
	const [counter, setCounter] = React.useState(0)
	const [inputValue, setInputValue] = React.useState('')

	const increment = () => setCounter((prevCount) => prevCount + 1)
	const decrement = () => setCounter((prevCount) => prevCount - 1)

	return (
		<main className='p-5 h-screen w-screen bg-gray-900 text-white'>
			<h1 className='mb-5 text-3xl font-bold'>React App</h1>
			<p className='text-2xl'>Contador: {counter}</p>
			<div className='flex gap-2 mt-5'>
				<button
					onClick={increment}
					className='px-5 py-1 transition rounded-full bg-gray-600 hover:bg-gray-700'>
					Acrescentar
				</button>
				<button
					onClick={decrement}
					disabled={counter === 0}
					className='px-5 py-1 transition rounded-full bg-gray-600 hover:bg-gray-700 disabled:opacity-30'>
					Decrementar
				</button>
			</div>
			<div className='mt-5'>
				<p>Valor do Input: {inputValue}</p>
				<input
					type='text'
					name='text'
					id='text'
					placeholder='Digite algo...'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className='px-2 py-1 rounded-md outline-none bg-gray-700'
				/>
			</div>
		</main>
	)
}

export default App
