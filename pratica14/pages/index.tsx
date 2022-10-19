import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import Formulario from '../components/Formulario'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getSession(context)

	if (session) {
		return {
			redirect: {
				destination: '/logado',
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

function Home() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<main className='flex items-center justify-center h-screen w-screen'>
				<Formulario />
			</main>
		</>
	)
}

export default Home
