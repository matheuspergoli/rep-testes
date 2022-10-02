import React from 'react'
import Image from 'next/image'

function Input({ type, name, placeholder, value, onChange, error }) {
	return (
		<div
			className={`flex items-center justify-between mb-2 p-2 border-2 rounded-md ${
				error ? 'border-red-400' : 'border-borderColor'
			}`}>
			<input
				className='outline-none w-full'
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && (
				<Image src='/icon-error.svg' alt='Error icon' width='25' height='25' />
			)}
		</div>
	)
}

export default Input
