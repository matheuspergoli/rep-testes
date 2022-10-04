import React from 'react'
import Head from 'next/head'
import UserSchema from '../components/UserSchema'
import { useFormik } from 'formik'

function Home() {
	const [usuarios, setUsuarios] = React.useState()

	React.useEffect(() => {
		async function fetchUsuarios() {
			const response = await fetch('/api/usuarios')
			const json = await response.json()
			setUsuarios(json)
		}
		fetchUsuarios()
	}, [])

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
		formik.resetForm()

		fetch('/api/usuarios', {
			method: 'POST',
			body: JSON.stringify(formik.values)
		})

		const response = await fetch('/api/usuarios')
		const usuarios = await response.json()
		setUsuarios(usuarios)
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1 className='text-3xl mb-3 text-white'>Inscrição de Usuários</h1>
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
					<button
						type='submit'
						className='p-2 self-start rounded-md text-white bg-black'>
						Registrar
					</button>
				</form>

				{usuarios && (
					<>
						<h1 className='text-2xl mt-3 text-white'>Usuários Registrados</h1>
						{usuarios.map((usuario, index) => (
							<section
								key={index}
								className='rounded-md my-4 p-2 border w-fit text-white'>
								<p>Nome: {usuario.firstName}</p>
								<p>Sobrenome: {usuario.lastName}</p>
							</section>
						))}
					</>
				)}
			</main>
		</>
	)
}

export default Home
