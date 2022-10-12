import React from 'react'
import UserSchema from '../../model/UserSchema'
import { useFormik } from 'formik'
import { auth } from '../../firebase/config'
import {
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth'
import { UserLoggedContext } from '../../context/UserLoggedContext'

function Form() {
	const { user } = React.useContext(UserLoggedContext)

	const formik = useFormik({
		initialValues: {
			senha: '',
			email: ''
		},
		onSubmit: () => null,
		validationSchema: UserSchema
	})

	async function register() {
		if (formik.values.email && formik.values.senha && formik.isValid) {
			try {
				const { email, senha } = formik.values
				const user = await createUserWithEmailAndPassword(auth, email, senha)
				formik.resetForm()
				console.log(user)
			} catch (error) {
				console.log(error)
			}
		}
	}

	async function login() {
		if (formik.values.email && formik.values.senha && formik.isValid) {
			try {
				const { email, senha } = formik.values
				const user = await signInWithEmailAndPassword(auth, email, senha)
				formik.resetForm()
				console.log(user)
			} catch (error) {
				console.log(error)
			}
		}
	}

	async function loginWithGoogle() {
		if (formik.values.email && formik.values.senha && formik.isValid) {
			try {
				const provider = new GoogleAuthProvider()
				const user = await signInWithPopup(auth, provider)
			} catch (error) {
				console.log(error)
			}
		}
	}

	async function logout() {
		await signOut(auth)
		formik.resetForm()
	}

	return (
		<form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
			<input
				className='w-full p-2 rounded-md border focus:outline-none focus:bg-white focus:border-blue-400 bg-gray-200'
				type='email'
				name='email'
				placeholder='Insira seu email'
				value={formik.values.email}
				onChange={formik.handleChange}
			/>
			{formik.errors.email ? (
				<p className='text-red-600'>{formik.errors.email}</p>
			) : null}

			<input
				className='w-full p-2 rounded-md border focus:outline-none focus:bg-white focus:border-blue-400 bg-gray-200'
				type='password'
				name='senha'
				placeholder='Insira sua senha'
				value={formik.values.senha}
				onChange={formik.handleChange}
			/>
			{formik.errors.senha ? (
				<p className='text-red-600'>{formik.errors.senha}</p>
			) : null}

			<section className='flex flex-col gap-1 mt-5'>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={register}>
					Cadastrar
				</button>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={login}>
					Logar
				</button>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={loginWithGoogle}>
					Logar com Google
				</button>
				<button
					className='w-full p-2 border rounded-md bg-black text-white'
					type='submit'
					onClick={logout}>
					Deslogar
				</button>
			</section>
			{user?.email && <p className='text-center'>{user.email}</p>}
		</form>
	)
}

export default Form
