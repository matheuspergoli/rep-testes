import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { deleteUser } from '../service/deleteUser'
import { createUser } from '../service/createUser'
import { getAllUsers } from '../service/getAllUsers'
import { QueryClient, useQuery, useMutation, dehydrate, useQueryClient } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('users', getAllUsers)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

interface User {
	_id: string
	firstName: string
	lastName: string
	age: number
}

function Home() {
	const [user, setUser] = React.useState({ firstName: '', lastName: '', age: 0 })
	const queryClient = useQueryClient()
	const { data } = useQuery<User[]>({ queryKey: 'users', queryFn: getAllUsers })

	const userCreateMutation = useMutation(createUser, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	const userDeleteMutation = useMutation(deleteUser, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	console.log(data)

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto p-3 sm:p-0'>
				<section>
					<h1 className='mb-10 text-2xl font-bold'>Users</h1>
					<form
						onSubmit={(e) => {
							e.preventDefault()
							userCreateMutation.mutate(user)
							setUser({ firstName: '', lastName: '', age: 0 })
						}}
						className='flex flex-col gap-3'>
						<div className='flex flex-col gap-1'>
							<label htmlFor='firstName'>First Name</label>
							<input
								type='text'
								id='firstName'
								value={user.firstName}
								onChange={(e) => setUser({ ...user, firstName: e.target.value })}
								className='rounded-lg border p-2'
							/>
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='lastName'>Last Name</label>
							<input
								type='text'
								id='lastName'
								value={user.lastName}
								onChange={(e) => setUser({ ...user, lastName: e.target.value })}
								className='rounded-lg border p-2'
							/>
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor='age'>Age</label>
							<input
								type='number'
								id='age'
								value={user.age}
								onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
								className='rounded-lg border p-2'
							/>
						</div>
						<button type='submit' className='rounded-lg bg-blue-500 p-2 text-white'>
							Submit
						</button>
					</form>

					<ul>
						{data?.map((user) => (
							<li key={user._id} className='my-3 w-60 rounded-lg border p-2'>
								<button
									onClick={() => userDeleteMutation.mutate(user._id)}
									className='rounded-lg bg-red-500 p-2 text-white'>
									Delete
								</button>
								<p>
									<span className='font-semibold'>Name</span>: {user.firstName} {user.lastName}
								</p>
								<p className='font-semibold'>
									<span className='font-semibold'>Age</span>: {user.age}
								</p>
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	)
}

export default Home
