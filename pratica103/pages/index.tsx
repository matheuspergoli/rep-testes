import React from 'react'
import Head from 'next/head'
import { Formik, Form, Field } from 'formik'
import { useQueryClient, useMutation } from 'react-query'
import { createUser, authUser, getUser } from '../services'
import { createUserValidation } from '../validations/createUserValidation'

function Home() {
	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto flex flex-col gap-2 p-3'>
				<h1 className='text-2xl font-bold'>NextJS App</h1>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: ''
					}}
					validationSchema={createUserValidation}
					onSubmit={async (values, { setSubmitting, resetForm, setFieldValue }) => {
						setSubmitting(true)

						const credentials = await createUser(values)
						if (credentials.response.status !== 201) {
							alert('Usuário já cadastrado')
							setFieldValue('email', '')
							return
						}

						const session = await authUser(credentials.data.token)
						if (session.response.status !== 200) {
							alert('Erro ao autenticar usuário')
							setFieldValue('email', '')
							setFieldValue('password', '')
							return
						}

						const userSession = await getUser(session.data.id)
						if (userSession.response.status !== 200) {
							alert('Erro ao buscar usuário')
							setFieldValue('email', '')
							setFieldValue('password', '')
							return
						}

						alert(`Usuário ${userSession.data.user.name} cadastrado com sucesso!`)
						resetForm()

						setSubmitting(false)
					}}>
					{({ isSubmitting, errors, touched }) => (
						<Form className='flex flex-col gap-2'>
							<div>
								<Field
									type='name'
									name='name'
									id='name'
									placeholder='Nome'
									className='rounded border border-gray-300 p-2'
								/>
								<p>{errors.name && touched.name ? <span className='text-red-500'>{errors.name}</span> : null}</p>
							</div>
							<div>
								<Field
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									className='rounded border border-gray-300 p-2'
								/>
								<p>{errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}</p>
							</div>
							<div>
								<Field
									type='password'
									name='password'
									id='password'
									placeholder='Senha'
									className='rounded border border-gray-300 p-2'
								/>
								<p>
									{errors.password && touched.password ? <span className='text-red-500'>{errors.password}</span> : null}
								</p>
							</div>
							<button type='submit' disabled={isSubmitting} className='w-fit rounded bg-blue-500 p-2 text-white'>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</main>
		</>
	)
}

export default Home
