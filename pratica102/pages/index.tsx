import React from 'react'
import Head from 'next/head'
import { createUser } from '../service/createUser'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useQuery, useQueryClient, useMutation } from 'react-query'

interface User {
	name: string
	email: string
}

function Home() {
	const queryClient = useQueryClient()
	const { data: session } = useSession()
	const [user, setUser] = React.useState({} as User)

	const createUserMutation = useMutation(createUser, {
		onSuccess: (data) => {
			queryClient.setQueryData('user', data)
		}
	})

	React.useEffect(() => {
		if (session) {
			setUser({
				name: session?.user?.name as string,
				email: session?.user?.email as string
			})
		}
	}, [session])

	console.log(user)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main>
				<h1>NextJS App</h1>
				{session ? (
					<>
						<p>Logged in as {session?.user?.email}</p>
						<button onClick={() => signOut()}>Sign out</button>
					</>
				) : (
					<>
						<p>Not logged in</p>
						<button
							onClick={async () => {
								await signIn('google')
								createUserMutation.mutate(user)
							}}>
							Sign in
						</button>
					</>
				)}
			</main>
		</>
	)
}

export default Home
