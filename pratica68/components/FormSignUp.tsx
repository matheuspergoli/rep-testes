import React from 'react'
import { Formik, Field, Form } from 'formik'
import { toast, Toaster } from 'react-hot-toast'
import { UserValidation } from '../validation/UserValidation'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const FormSignUp = () => {
	const supabase = useSupabaseClient()
	const [loading, setLoading] = React.useState(false)

	async function criarUser(email: string, password: string) {
		setLoading(true)
		const { data, error } = await supabase.auth.signUp({
			email,
			password
		})
		setLoading(false)

		if (error) {
			console.log(error)
			toast.error('Erro ao criar usuário')
		} else {
			toast.success('Usuário criado com sucesso, verifique seu email.', {
				style: {
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center'
				}
			})
		}
	}

	return (
		<>
			<Toaster />
			<h1 className='mb-10 text-4xl font-bold'>SignUp</h1>
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={UserValidation}
				onSubmit={(values) => {
					criarUser(values.email, values.password)
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
							{loading ? 'Carregando...' : 'Criar conta'}
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}
