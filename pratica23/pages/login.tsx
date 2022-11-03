import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSidePropsContext, GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const session = await getSession(context)

	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			session
		}
	}
}

function Login() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className='flex flex-col gap-2 items-center justify-center w-screen h-screen'>
				<figure>
					<Image priority src='/github-logo.png' alt='Github Logo' width={170} height={170} />
				</figure>
				<h1 className='text-lg italic text-white'>Acesse a plataforma pelo Github</h1>
				<button onClick={() => signIn('github')} className='flex gap-2 items-center text-lg rounded-md px-2 py-1 font-semibold text-white bg-gray-800'>
					Github
					<FaGithub className='text-2xl' />
				</button>
			</main>
		</>
	)
}

export default Login
