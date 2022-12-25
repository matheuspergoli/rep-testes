import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Formik, Form, Field } from 'formik'
import { deleteUser } from '../service/deleteUser'
import { createUser } from '../service/createUser'
import { getAllUsers } from '../service/getAllUsers'
import { createUserValidation } from '../validation/createUserValidation'
import { QueryClient, useQuery, dehydrate, useQueryClient, useMutation } from 'react-query'

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
	const queryClient = useQueryClient()
	const { data } = useQuery<User[]>({ queryKey: 'users', queryFn: getAllUsers })

	const createUserMutation = useMutation(createUser, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	const deleteUserMutation = useMutation(deleteUser, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto p-3 sm:p-0'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-3xl font-bold'>NextJS App</h1>
					<Formik
						initialValues={{ firstName: '', lastName: '', age: '' }}
						validationSchema={createUserValidation}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							setSubmitting(true)
							await createUserMutation.mutateAsync(values)
							setSubmitting(false)
							resetForm()
						}}>
						{({ isSubmitting, errors, touched }) => (
							<Form className='flex flex-col items-center justify-center'>
								<div>
									<Field
										type='text'
										name='firstName'
										placeholder='Primeiro nome'
										className='my-2 rounded-md border border-gray-300 p-2'
									/>
									{errors.firstName && touched.firstName ? (
										<p className='text-red-500'>{errors.firstName}</p>
									) : null}
								</div>
								<div>
									<Field
										type='text'
										name='lastName'
										placeholder='Segundo nome'
										className='my-2 rounded-md border border-gray-300 p-2'
									/>
									{errors.lastName && touched.lastName ? (
										<p className='text-red-500'>{errors.lastName}</p>
									) : null}
								</div>
								<div>
									<Field
										type='number'
										name='age'
										placeholder='Idade'
										className='my-2 rounded-md border border-gray-300 p-2'
									/>
									{errors.age && touched.age ? <p className='text-red-500'>{errors.age}</p> : null}
								</div>
								<button
									type='submit'
									disabled={isSubmitting}
									className='my-2 rounded-md bg-blue-500 p-2 text-white'>
									Enviar
								</button>
							</Form>
						)}
					</Formik>
				</div>

				<section className='flex flex-col items-center justify-center'>
					<h1 className='mb-5 text-3xl font-bold'>Users</h1>
					<div className='flex flex-col gap-3'>
						{data?.map((user) => (
							<article key={user._id} className='w-80 rounded-lg border p-2'>
								<button
									onClick={() => deleteUserMutation.mutate(user._id)}
									className='rounded-md bg-red-500 p-2 text-white'>
									Deletar
								</button>
								<p className='text-xl font-semibold'>
									Nome: {user.firstName} {user.lastName}
								</p>
								<p className='text-xl font-semibold'>Idade: {user.age}</p>
							</article>
						))}
					</div>
				</section>
			</main>
		</>
	)
}

export default Home
