import Head from 'next/head'
import { getSession, signOut, useSession } from 'next-auth/react'
import { GetServerSidePropsContext, GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: { session }
	}
}

function Logado() {
	const { data: session, status } = useSession()

	if (status === 'loading') {
		return (
			<>
				<Head>
					<title>Home</title>
				</Head>
				<main className='flex items-center justify-center h-screen w-screen'>
					<h1 className='text-2xl text-white'>Carregando</h1>
				</main>
			</>
		)
	}
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='flex flex-col items-center justify-center gap-2 h-screen w-screen'>
				<h1 className='text-2xl text-white'>Bem vindo!</h1>
				<h2 className='text-2xl text-white'>{session?.user?.name}</h2>
				<button
					onClick={() => signOut()}
					className='w-20 rounded-md bg-gray-900 text-white'>
					Sair
				</button>
			</main>
		</>
	)
}

export default Logado
