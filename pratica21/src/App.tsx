import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Meal from './pages/Meal'

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/meal/:id' element={<Meal />} />
			</Routes>
		</>
	)
}

export default App
