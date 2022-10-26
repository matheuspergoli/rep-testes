import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import HeadingMenu from './components/HeadingMenu'

function App() {
	return (
		<>
			<HeadingMenu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<MovieInfo />} />
			</Routes>
		</>
	)
}

export default App
