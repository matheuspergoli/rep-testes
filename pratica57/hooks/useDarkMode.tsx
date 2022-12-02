import React from 'react'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
	hasDarkMode: boolean
	toggleDarkMode: () => void
}

const theme = create<ThemeState>()(
	persist(
		(set) => ({
			hasDarkMode: false,
			toggleDarkMode: () => set((state) => ({ hasDarkMode: !state.hasDarkMode }))
		}),
		{
			name: 'theme',
			getStorage: () => localStorage
		}
	)
)

function useDarkMode() {
	const [darkMode, setDarkMode] = React.useState(false)
	const { hasDarkMode, toggleDarkMode } = theme((state) => state)

	React.useEffect(() => {
		setDarkMode(hasDarkMode)
	}, [hasDarkMode])

	return { darkMode, toggleDarkMode }
}

export default useDarkMode
