import React from 'react'

function Button(props) {
	return (
		<button
			onClick={props.onClick}
			className='px-4 py-1 rounded-md transition font-semibold bg-gray-400 hover:bg-gray-700 hover:text-white active:scale-95'>
			Clique aqui
		</button>
	)
}

export default Button
