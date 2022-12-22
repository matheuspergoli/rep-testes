import React from 'react'

export const MainContainer = (props: { children: React.ReactNode }) => {
	return <main className='container mx-auto p-3 sm:p-0'>{props.children}</main>
}
