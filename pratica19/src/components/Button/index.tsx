import React from 'react'

export interface ButtonProps {
	font: string
	label: string
	radius: string
	background: string
}

function Button(props: ButtonProps) {
	return (
		<button
			className={`px-4 py-1 text-white ${props.background} ${props.radius} ${props.font}`}
		>
			{props.label}
		</button>
	)
}

export default Button
