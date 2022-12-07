import React from 'react'

export const MainContainer = (props: { children: React.ReactNode }) => {
	return (
		<main className='mx-auto w-full max-w-7xl'>{props.children}</main>
	)
}
