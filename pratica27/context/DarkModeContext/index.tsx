import React from 'react'

interface DarkModeProps {
	darkMode: boolean
	setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState = {
	darkMode: false
}

export const DarkModeContext = React.createContext<DarkModeProps>(defaultState)

export function DarkModeContextProvider(props: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = React.useState(false)

	return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{props.children}</DarkModeContext.Provider>
}
