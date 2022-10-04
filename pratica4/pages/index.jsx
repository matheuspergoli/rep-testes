import Head from 'next/head'
import UserSchema from '../components/UserSchema'
import { useFormik } from 'formik'

function Home() {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: ''
		},
		validationSchema: UserSchema,
		onSubmit: handleSubmit
	})

	async function handleSubmit() {
		fetch('/api/usuarios', {
			method: 'POST',
			body: JSON.stringify(formik.values)
		})

		const response = await fetch('/api/usuarios')
		const usuarios = await response.json()
		console.log(usuarios)
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1 className='text-3xl mb-3'>Inscrição de Usuários</h1>
				<form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
					<div>
						<input
							className='outline-none rounded-md p-1 indent-2'
							type='text'
							id='firstName'
							placeholder='Nome'
							value={formik.values.firstName}
							onChange={formik.handleChange}
						/>
					</div>
					<div>
						<input
							className='outline-none rounded-md p-1 indent-2'
							type='text'
							id='lastName'
							placeholder='Sobrenome'
							value={formik.values.lastName}
							onChange={formik.handleChange}
						/>
					</div>
					<div>
						<input
							className='outline-none rounded-md p-1 indent-2'
							type='email'
							id='email'
							placeholder='Email'
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
					</div>
					<button type='submit' className='p-2 self-start rounded-md bg-black'>
						Registrar
					</button>
				</form>
			</main>
		</>
	)
}

export default Home
