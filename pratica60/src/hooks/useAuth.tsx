import React from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
	const value = React.useContext(AuthContext)

	return value
}
