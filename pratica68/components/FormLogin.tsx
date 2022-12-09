import React from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, Form } from 'formik'
import { toast, Toaster } from 'react-hot-toast'
import { UserValidation } from '../validation/UserValidation'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const FormLogin = () => {
	const router = useRouter()
	const supabase = useSupabaseClient()
	const [loading, setLoading] = React.useState(false)

	async function logarUser(email: string, password: string) {
		setLoading(true)
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})
		setLoading(false)

		if (error) {
			if (error.message === 'Email not confirmed') {
				toast.error('Email não confirmado, verifique seu email.')
			} else if (error.message === 'Invalid login credentials') {
				toast.error('Email ou senha inválidos.')
			} else {
				toast.error('Erro ao logar usuário.')
			}
		} else {
			toast.success('Usuário logado com sucesso.', {
				duration: 1000
			})

			setTimeout(() => {
				router.push('/')
			}, 1000)
		}
	}

	return (
		<>
			<Toaster
				toastOptions={{
					style: {
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center'
					}
				}}
			/>

			<h1 className='mb-10 text-4xl font-bold'>Login</h1>
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={UserValidation}
				onSubmit={(values) => {
					logarUser(values.email, values.password)
				}}>
				{({ errors, touched }) => (
					<Form className='flex flex-col gap-5'>
						<div>
							<Field
								type='email'
								name='email'
								id='email'
								placeholder='Digite seu email'
								className='w-fit rounded-md border p-1'
							/>
							{errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : null}
						</div>

						<div>
							<Field
								type='password'
								name='password'
								id='password'
								placeholder='Digite sua senha'
								className='w-fit rounded-md border p-1'
							/>
							{errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p> : null}
						</div>
						<button
							type='submit'
							className='w-fit rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600 disabled:bg-opacity-50'
							disabled={loading}>
							{loading ? 'Carregando...' : 'Entrar'}
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}
