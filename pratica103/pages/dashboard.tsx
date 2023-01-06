import React from 'react'
import { useRouter } from 'next/router'

const Dashboard = () => {
	const router = useRouter()
	const [user, setUser] = React.useState()

	React.useEffect(() => {
		const sessionStorage = JSON.parse(localStorage.getItem('session') as any)
		if (!sessionStorage?.token) {
			router.push('/login')
		}
	}, [router])

	return (
		<main className='container mx-auto p-3'>
			<h1 className='text-2xl font-bold'>Dashboard</h1>
		</main>
	)
}
export default Dashboard
