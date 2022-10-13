import React from 'react'

interface DarkModeContextProps {
	children: React.ReactNode
}

export const DarkModeContext = React.createContext(null)

export function DarkModeContextProvider(props: DarkModeContextProps) {
	const [darkMode, setDarkMode] = React.useState('dark')

	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			{props.children}
		</DarkModeContext.Provider>
	)
}
