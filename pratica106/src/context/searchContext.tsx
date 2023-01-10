import React from 'react'

interface SearchContextProps {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext({} as SearchContextProps)

export const SearchProvider = (props: { children: React.ReactNode }) => {
	const [search, setSearch] = React.useState('')

	return <SearchContext.Provider value={{ search, setSearch }}>{props.children}</SearchContext.Provider>
}
