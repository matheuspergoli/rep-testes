import React from 'react'
import { useRouter } from 'next/router'
import { loginUser } from '../services'

interface User {
	email: string
	password: string
}

interface Session {
	id: string
	token: string
	name: string
}

const Login = () => {
	const router = useRouter()
	const [user, setUser] = React.useState({
		email: '',
		password: ''
	} as User)
	const [session, setSession] = React.useState<Session>({} as Session)
	// const [session, setSession] = React.useState({} as Session)

	React.useEffect(() => {
		const sessionStorage = JSON.parse(localStorage.getItem('session') as any)
		if (sessionStorage?.token) {
			router.push('/dashboard')
		}
	}, [router])

	return (
		<main className='container mx-auto p-3'>
			<h1 className='mb-5 text-2xl font-bold'>Login</h1>
			{session.name}
			<form
				className='flex flex-col gap-5'
				onSubmit={async (e) => {
					e.preventDefault()
					const credentials = await loginUser(user)
					// if (credentials.response.status !== 200) {
					// 	alert('Usuário não encontrado')
					// 	return
					// }
					setSession(credentials)
					localStorage.setItem('session', JSON.stringify(credentials))
					router.push('/dashboard')
				}}>
				<input
					type='text'
					name='email'
					placeholder='Email'
					className='rounded-md border p-2'
					value={user?.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<input
					type='password'
					name='password'
					placeholder='Senha'
					className='rounded-md border p-2'
					value={user?.password}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<button type='submit' className='rounded-md bg-blue-500 text-white'>
					Logar
				</button>
			</form>
		</main>
	)
}

export default Login
