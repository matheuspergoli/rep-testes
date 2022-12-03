import React from 'react'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/rooms/new' element={<NewRoom />} />
		</Routes>
	)
}
