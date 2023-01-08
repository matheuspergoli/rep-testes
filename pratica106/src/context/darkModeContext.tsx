import React from 'react'

type TypeDarkMode = 'dark' | 'light'

interface IDarkModeContext {
	darkMode: TypeDarkMode
	// setDarkMode: React.Dispatch<React.SetStateAction<TypeDarkMode>>
	changeTheme: () => void
}

export const DarkModeContext = React.createContext<IDarkModeContext>({
	darkMode: 'dark',
	// setDarkMode: () => {},
	changeTheme: () => {}
})

export const DarkModeProvider = (props: { children: React.ReactNode }) => {
	const [darkMode, setDarkMode] = React.useState<TypeDarkMode>('dark')

	function changeTheme() {
		const newTheme = darkMode === 'dark' ? 'light' : 'dark'
		setDarkMode(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	React.useEffect(() => {
		const localTheme = localStorage.getItem('theme')
		if (localTheme) {
			setDarkMode(localTheme as TypeDarkMode)
		}

		const html = document.documentElement
		if (html.classList.contains('dark')) {
			html.classList.remove('dark')
		}
		if (html.classList.contains('light')) {
			html.classList.remove('light')
		}
		html.classList.add(darkMode)
	}, [darkMode])

	return <DarkModeContext.Provider value={{ darkMode, changeTheme }}>{props.children}</DarkModeContext.Provider>
}
