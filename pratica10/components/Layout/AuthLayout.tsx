import React from 'react'
import { useRouter } from 'next/router'
import { UserLoggedContext } from '../../context/UserLoggedContext'

interface AuthLayoutProps {
	children: React.ReactNode
}

function AuthLayout(props: AuthLayoutProps) {
	const router = useRouter()
	const { user } = React.useContext(UserLoggedContext)

	React.useEffect(() => {
		if (user?.email) router.push('/')
	}, [user, router])

	return (
		<main className='flex items-center justify-center h-screen w-screen bg-gray-900'>
			{props.children}
		</main>
	)
}

export default AuthLayout
