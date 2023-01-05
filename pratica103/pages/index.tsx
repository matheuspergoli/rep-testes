import React from 'react'
import Head from 'next/head'
import { createUser } from '../services'
import { useQueryClient, useQuery, useMutation } from 'react-query'

interface User {
	name: string
	email: string
	password: string
}

interface Session {
	id: string
	message: string
	token: string
}

function Home() {
	const queryClient = useQueryClient()
	const [user, setUser] = React.useState({} as User)
	const [session, setSession] = React.useState<null | Session>()

	const createUserMutation = useMutation(createUser, {
		onSuccess: (data: Session) => {
			setSession(data)
		}
	})

	console.log(session)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main>
				<h1>NextJS App</h1>
				<input type='text' placeholder='Name' onChange={(e) => setUser({ ...user, name: e.target.value })} />
				<input type='text' placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
				<input type='text' placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
				<button onClick={() => createUserMutation.mutate(user)}>Create User</button>
			</main>
		</>
	)
}

export default Home
