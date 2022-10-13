import React from 'react'

interface InputProps {
	type: string
	name: string
	placeholder: string
	value: string
	onChange: any
}

function Input(props: InputProps) {
	return (
		<input
			className='p-2 rounded-md border focus:outline-none placeholder:text-black bg-gray-300 focus:bg-white focus:border-blue-400'
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	)
}

export default Input
