import React from 'react'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { AuthContext } from './context/AuthContext'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
	const { user } = React.useContext(AuthContext)

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/rooms/new' element={user ? <NewRoom /> : <Navigate to='/' />} />
		</Routes>
	)
}
