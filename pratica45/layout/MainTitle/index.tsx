import React from 'react'

function MainTitle(props: { children: React.ReactNode }) {
	return <h1 className='text-7xl font-bold mb-20'>{props.children}</h1>
}

export default MainTitle
