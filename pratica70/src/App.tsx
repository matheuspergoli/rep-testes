import React from 'react'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { UserContext } from './context/UserContext'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
	const { user } = React.useContext(UserContext)

	return (
		<Routes>
			<Route path='/' element={user ? <Store /> : <Home />} />
			<Route path='/store' element={user ? <Store /> : <Navigate to='/' />} />
		</Routes>
	)
}
