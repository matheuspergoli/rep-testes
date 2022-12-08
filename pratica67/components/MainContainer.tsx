import React from 'react'

export const MainContainer = (props: { children: React.ReactNode }) => {
	return <main className='mx-auto w-full max-w-7xl p-3'>{props.children}</main>
}
