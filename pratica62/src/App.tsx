import React from 'react'
import { Login } from './pages/Login'
import { Logado } from './pages/Logado'
import { Register } from './pages/Register'
import { UserAuth } from './context/UserAuth'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
	const { user } = React.useContext(UserAuth)

	return (
		<main className='flex h-screen w-screen flex-col items-center justify-center bg-zinc-800'>
			<Routes>
				<Route
					path='/'
					element={user ? <Navigate to='/logado' /> : <Register />}
				/>
				<Route
					path='/login'
					element={user ? <Navigate to='/logado' /> : <Login />}
				/>
				<Route
					path='/logado'
					element={user ? <Logado /> : <Navigate to='/' />}
				/>
			</Routes>
		</main>
	)
}
