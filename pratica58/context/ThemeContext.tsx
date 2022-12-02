import React from 'react'

type ThemeType = 'dark' | 'light'

interface ThemeContextProps {
	theme: ThemeType
	changeTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
	theme: 'light',
	changeTheme: () => {}
})

function ThemeContextProvider(props: { children: React.ReactNode }) {
	const [theme, setTheme] = React.useState<ThemeType>('light')

	function changeTheme() {
		setTheme(theme === 'dark' ? 'light' : 'dark')
		const themeSelected = localStorage.getItem('theme')
		if (themeSelected === 'dark') {
			localStorage.setItem('theme', 'light')
		}
		if (themeSelected === 'light') {
			localStorage.setItem('theme', 'dark')
		}
	}

	React.useEffect(() => {
		setTheme(localStorage.getItem('theme') as ThemeType)
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		}
		if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return <ThemeContext.Provider value={{ theme, changeTheme }}>{props.children}</ThemeContext.Provider>
}

export default ThemeContextProvider
