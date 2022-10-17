import React from 'react'

interface ButtonProps {
	className: string
}

function Button(props: ButtonProps) {
	return (
		<button
			className={`font-bold my-10 py-2 px-6 rounded-full bg-white ${props.className}`}>
			Acessar
		</button>
	)
}

export default Button
