import React from 'react'

function Input({ type, name, placeholder, value, onChange, error }) {
	return (
		<input
			className={`block w-full mb-2 outline-none p-2 rounded-md border-2 border-borderColor ${error ? 'border-red-600' : ''}`}
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
