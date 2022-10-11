import React from 'react'

type Tema = 'dark' | ''

interface AppContextProps {
	tema?: Tema
	alternarTema?: () => void
}

export const AppContext = React.createContext<AppContextProps>(null)

export function AppContextProvider(props) {
	const [tema, setTema] = React.useState<Tema>('dark')

	function alternarTema() {
		setTema(tema === '' ? 'dark' : '')
	}

	return (
		<AppContext.Provider value={{ tema, alternarTema }}>
			{props.children}
		</AppContext.Provider>
	)
}
