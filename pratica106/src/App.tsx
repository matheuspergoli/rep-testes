import React from 'react'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { CountryInfo } from './components/CountryInfo'

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/country/:id' element={<CountryInfo />} />
			</Routes>
		</>
	)
}
