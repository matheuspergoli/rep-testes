import React from 'react'

interface ButtonProps {
	text: string
	onClick: () => void
}

function Button(props: ButtonProps) {
	return (
		<button
			className='w-full p-2 border rounded-md bg-black text-white'
			type='submit'
			onClick={props.onClick}>
			{props.text}
		</button>
	)
}

export default Button
