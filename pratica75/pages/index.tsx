import React from 'react'
import Head from 'next/head'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getUsers, deleteUser, createUser } from '../service/usersApi'

function Home() {
	const generateId = () => {
		return Math.floor(Math.random() * 1000000)
	}

	const queryClient = useQueryClient()
	const [name, setName] = React.useState<string>('')
	const { data: users } = useQuery('users', getUsers)

	const { mutate: createUserMutation } = useMutation(createUser, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	const { mutate: deleteUserMutation } = useMutation(deleteUser, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='p-3'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-3xl font-bold mb-5'>NextJS App</h1>
					<div className='flex flex-col items-center justify-center'>
						<div className='flex flex-col items-center justify-center'>
							<input
								type='text'
								className='rounded-md border-2 border-gray-300 p-2'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<button
								className='mt-2 rounded-md bg-blue-500 p-2 text-white'
								onClick={() => {
									createUserMutation({
										id: generateId(),
										name
									})
									setName('')
								}}>
								Create User
							</button>
						</div>
						<div className='mt-4 flex flex-col items-center justify-center'>
							{users?.map((user: any) => (
								<div
									key={user.id}
									className='mt-2 flex w-96 flex-row items-center justify-between rounded-md border-2 border-gray-300 p-2'>
									<span>{user.name}</span>
									<button
										className='rounded-md bg-red-500 p-2 text-white'
										onClick={() => deleteUserMutation(user.id)}>
										Delete
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Home
