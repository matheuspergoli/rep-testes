import React from 'react'

function Button() {
	return (
		<button
			type='submit'
			className='hover:bg-btnHover transition-colors duration-200 w-full mb-2 p-2 border-2 border-btnGreen uppercase rounded-md font-bold text-white bg-btnGreen'>
			Claim your free trial
		</button>
	)
}

export default Button
