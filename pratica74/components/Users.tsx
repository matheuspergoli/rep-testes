import React from 'react'
import { useQueryClient } from 'react-query'

interface User {
	id: number
	name: string
}

export const Users = () => {
	const queryClient = useQueryClient()

	const users: User[] | undefined = queryClient.getQueryData('users')

	if (!users) {
		return <p>Loading...</p>
	}

	return (
		<>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	)
}
