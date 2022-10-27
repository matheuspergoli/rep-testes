import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import HeadingMenu from './components/HeadingMenu'
import Trending from './pages/Trending'

function App() {
	return (
		<>
			<HeadingMenu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<Movie />} />
				<Route path='/trending' element={<Trending />} />
			</Routes>
		</>
	)
}

export default App
