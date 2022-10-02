import React from 'react'

function Input({ type, placeholder }) {
	return (
		<input
			className='block p-2 rounded-md outline-none bg-input-color text-gray-color'
			type={type}
			placeholder={placeholder}
		/>
	)
}

export default Input
