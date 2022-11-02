import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSidePropsContext, GetServerSideProps } from 'next'
import { FaGithub } from 'react-icons/fa'

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
			<main className='flex flex-col gap-2 items-center justify-center w-screen h-screen bg-black bg-opacity-90'>
				<figure>
					<Image priority src='/github-logo.png' alt='Github Logo' width={150} height={150} />
				</figure>
				<h1 className='italic text-white'>Acesse a plataforma com Github</h1>
				<button onClick={() => signIn('github')} className='flex gap-2 items-center rounded-md p-1 font-semibold text-white bg-gray-800'>
					Github
					<FaGithub className='text-2xl' />
				</button>
			</main>
		</>
	)
}

export default Login
