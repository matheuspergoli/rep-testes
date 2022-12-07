import React from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
	const [theme, setTheme] = React.useState<Theme>(() => {
		const localData = localStorage.getItem('theme')
		return localData ? JSON.parse(localData) : 'light'
	})

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	React.useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme))

		if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.add('dark')
		}
	}, [theme])

	return { theme, toggleTheme }
}
