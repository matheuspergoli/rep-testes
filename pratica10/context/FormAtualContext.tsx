import React from 'react'

interface FormAtualProps {
	children: React.ReactNode
}

export const FormAtualContext = React.createContext(null)

export function FormAtualContextProvider(props: FormAtualProps) {
	const [formAtual, setFormAtual] = React.useState(false)

	return (
		<FormAtualContext.Provider value={{ formAtual, setFormAtual }}>
			{props.children}
		</FormAtualContext.Provider>
	)
}
