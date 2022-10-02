import React from 'react'

function Input({ type, name, placeholder, value, onChange }) {
	return (
		<input
			className='outline-none p-2 rounded-md border-2 border-borderColor'
			name={name}
			type={type}
      value={value}
      onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
