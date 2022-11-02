import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
			<main className='flex flex-col items-center justify-center w-screen h-screen bg-gray-900'>
				<figure>
					<Image priority src='/github-logo.png' alt='Github Logo' width={150} height={150} />
				</figure>
				<button onClick={() => signIn('github')} className='mt-5 rounded-md p-1 font-bold text-lg bg-gray-300'>
					Entre com Github
				</button>
			</main>
		</>
	)
}

export default Login
