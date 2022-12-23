import React from 'react'

interface Props {
	children: React.ReactNode
}

export const MainContainer = (props: Props) => {
	return <main className='container mx-auto p-3 sm:p-0'>{props.children}</main>
}
