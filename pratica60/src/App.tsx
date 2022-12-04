import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { useAuth } from './hooks/useAuth'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
	const { user } = useAuth()

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/rooms/new' element={user ? <NewRoom /> : <Navigate to='/' />} />
		</Routes>
	)
}
