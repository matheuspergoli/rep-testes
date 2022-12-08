import Head from 'next/head'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'
import { MainContainer } from '../components/MainContainer'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const supabase = createServerSupabaseClient(context)

	const {
		data: { session }
	} = await supabase.auth.getSession()

	if (!session) {
		return {
			redirect: {
				destination: '/signup',
				permanent: false
			}
		}
	}

	return {
		props: {
			initialSession: session,
			user: session.user
		}
	}
}

function Home() {
	const user = useUser()
	const router = useRouter()
	const supabase = useSupabaseClient()

	async function signOut() {
		await supabase.auth.signOut()
		router.push('/signup')
	}

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<MainContainer>
				<h1 className='mb-10 text-4xl font-bold'>Homepage</h1>
				<p className='text-2xl'>Bem vindo, {user?.email}</p>
				<p className='text-2xl'>Você está logado com a role: {user?.role}</p>
				<button
					className='mt-5 rounded-md bg-red-500 px-3 py-2 text-white transition hover:bg-red-600'
					onClick={signOut}>
					SignOut
				</button>
			</MainContainer>
		</>
	)
}

export default Home
