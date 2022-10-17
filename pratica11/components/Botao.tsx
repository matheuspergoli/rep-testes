import React from 'react'

interface BotaoProps {
	className?: string
	cor?: 'green' | 'blue' | 'gray'
	children: React.ReactNode
}

function Botao(props: BotaoProps) {
	return (
		<button
			className={`px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 to-blue-700 text-white ${props.className}`}>
			{props.children}
		</button>
	)
}

export default Botao
