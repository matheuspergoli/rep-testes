import React from 'react'

function Input({ type, placeholder, name, value, onChange }) {
	return (
		<input
			className='block p-2 rounded-md outline-none bg-input-color text-gray-color'
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
