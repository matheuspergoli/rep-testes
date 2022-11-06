import React from 'react'

interface DarkModeProps {
	darkMode: boolean
	setDarkMode: (state: boolean) => void
}

const defaultStates = {
	darkMode: false,
	setDarkMode: () => {}
}

export const DarkModeContext = React.createContext<DarkModeProps>(defaultStates)

export function DarkModeContextProvider(props: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = React.useState(false)

	return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{props.children}</DarkModeContext.Provider>
}
