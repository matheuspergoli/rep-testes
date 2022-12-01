import React from 'react'
import { useQuery } from 'react-query'
import useDarkMode from './store/useDarkMode'

function App() {
	const { data, status } = useQuery(['users'], async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		return response.json()
	})
	const { darkMode, toggleDarkMode } = useDarkMode((state) => state)

	if (status === 'loading') {
		return <div>Loading...</div>
	}
	return (
		<main className='p-3'>
			<h1 className='mb-5 text-2xl font-bold'>Theme: {darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
			<button className='rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600' onClick={toggleDarkMode}>
				Toggle Dark Mode
			</button>
			<ul className='mt-5'>
				{data.map((user) => (
					<li key={user.id} className='mb-3'>
						{user.name}
					</li>
				))}
			</ul>
		</main>
	)
}

export default App
