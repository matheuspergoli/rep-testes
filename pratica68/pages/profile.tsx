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
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			name: 'John Doe'
		}
	}
}

function Profile() {
	const user = useUser()
	const router = useRouter()
	const supabase = useSupabaseClient()

	async function deslogar() {
		await supabase.auth.signOut()

		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Profile</title>
			</Head>
			<MainContainer>
				<h1 className='mb-10 text-4xl font-bold'>Profile</h1>
				<p className='text-xl'>
					Bem vindo, <span className='font-semibold'>{user?.email}</span>
				</p>
				<button onClick={deslogar} className='mt-5 rounded-md bg-red-500 p-2 text-white'>
					Deslogar
				</button>
			</MainContainer>
		</>
	)
}

export default Profile
