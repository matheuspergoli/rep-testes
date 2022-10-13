import React from 'react'

interface AuthLayoutProps {
	children: React.ReactNode
}

function AuthLayout(props: AuthLayoutProps) {
	return (
		<main className='flex items-center justify-center h-screen w-screen bg-gray-900'>{props.children}</main>
	)
}

export default AuthLayout
