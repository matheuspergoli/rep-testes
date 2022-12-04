import { Home } from './pages/Home'
import { Room } from './pages/Room'
import { NewRoom } from './pages/NewRoom'
import { useAuth } from './hooks/useAuth'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
	const { user } = useAuth()

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/rooms/new' element={user ? <NewRoom /> : <Navigate to='/' />} />
			<Route path='/rooms/:id' element={user ? <Room /> : <Navigate to='/' />} />
		</Routes>
	)
}
