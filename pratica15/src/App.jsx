import React from 'react'
import Button from './components/Button'

function App() {
	return (
		<main className='p-5 bg-gray-900'>
			<h1 className='text-2xl mb-5 text-white'>React App</h1>
			<Button onClick={() => console.log('Clicou')} />
		</main>
	)
}

export default App
