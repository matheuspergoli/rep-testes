import React from 'react'

interface ParagrafoProps {
	className?: string
	children: React.ReactNode
}

function Paragrafo(props: ParagrafoProps) {
	return <p className={`w-60 text-white ${props.className}`}>{props.children}</p>
}

export default Paragrafo
