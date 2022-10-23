import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contato' element={<Contato />} />
				<Route path='/sobre' element={<Sobre />} />
			</Routes>
		</>
	)
}

export default App
