import React from 'react'
import Head from 'next/head'
import { auth } from '../services/firebase'
import { database } from '../services/firebase'
import { CircularProgress } from '@mui/material'
import { doc, onSnapshot } from 'firebase/firestore'
import { AddItemForm } from '../components/AddItemForm'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

interface Product {
	id: string
	name: string
	price: number
}

function Home() {
	const provider = new GoogleAuthProvider()
	const [user, loading, error] = useAuthState(auth)

	const unsub = onSnapshot(doc(database, 'products', 'product'), (doc) => {
		console.log('Current data: ', doc.data())
	})

	async function handleLogin() {
		try {
			const result = await signInWithPopup(auth, provider)
		} catch (error) {
			console.log(error)
		}
	}

	async function handleLogout() {
		try {
			await auth.signOut()
		} catch (error) {
			console.log(error)
		}
	}

	if (loading) {
		return (
			<div className='flex h-screen items-center justify-center'>
				<CircularProgress />
			</div>
		)
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='mx-auto flex w-full max-w-7xl flex-col gap-5 p-3'>
				{user ? (
					<h1 className='mb-10 text-4xl font-bold'>Olá, {user.displayName}! Você está logado!</h1>
				) : (
					<h1 className='mb-10 text-4xl font-bold'>Você não está logado!</h1>
				)}

				<button
					className='w-24 rounded-md bg-blue-500 px-3 py-2 text-center text-white transition hover:bg-blue-600'
					onClick={handleLogin}>
					Logar
				</button>
				<button
					className='w-24 rounded-md bg-red-500 px-3 py-2 text-center text-white transition hover:bg-red-600'
					onClick={handleLogout}>
					Deslogar
				</button>

				<AddItemForm />

				{/* <section className='grid grid-cols-4 gap-5'>
					{products?.map((snapshot) => (
						<article key={snapshot.id} className='flex flex-col gap-2 border p-2'>
							<h1 className='text-2xl font-bold'>{snapshot.name}</h1>
							<p className='text-lg'>R${snapshot.price}</p>
						</article>
					))}
				</section> */}
			</main>
		</>
	)
}

export default Home
