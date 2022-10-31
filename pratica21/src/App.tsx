import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	)
}

export default App
