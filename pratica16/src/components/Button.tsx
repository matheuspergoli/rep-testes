import React from 'react'

interface ButtonProps {
	text: string
}

function Button(props: ButtonProps) {
	return (
		<button className='mt-5 px-5 py-1 font-semibold transition rounded-full bg-gray-600 hover:bg-gray-700 active:scale-95'>
			{props.text}
		</button>
	)
}

export default Button
