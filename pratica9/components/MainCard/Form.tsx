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
import Button from './Button'
import UserLogged from './UserLogged'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
				toast.success('Usuário registrado!', {
					autoClose: 2500
				})
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
				toast.success('Login efetuado!', {
					autoClose: 2500
				})
				console.log(user)
			} catch (error) {
				console.log(error)
				toast.error('Usuário inválido!', {
					autoClose: 2500
				})
			}
		}
	}

	async function loginWithGoogle() {
		try {
			const provider = new GoogleAuthProvider()
			const user = await signInWithPopup(auth, provider)
			toast.success('Login efetuado!', {
				autoClose: 2500
			})
		} catch (error) {
			console.log(error)
			toast.error('Usuário inválido!', {
				autoClose: 2500
			})
		}
	}

	async function logout() {
		await signOut(auth)
		formik.resetForm()
		toast.success('Logout efetuado!', {
			autoClose: 2500
		})
	}

	return (
		<>
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
					<Button text='Cadastrar' onClick={register} />
					<Button text='Logar' onClick={login} />
					<Button text='Logar com Google' onClick={loginWithGoogle} />
					<Button text='Deslogar' onClick={logout} />
				</section>
				{user?.email && <UserLogged userEmail={user.email} />}
			</form>
			<ToastContainer />
		</>
	)
}

export default Form
