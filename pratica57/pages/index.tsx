import Head from 'next/head'
import { parseCookies } from 'nookies'
import Header from '../components/Header'
import useCookies from '../hooks/useCookies'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const cookies = parseCookies(context)
	console.log(cookies)
	return {
		props: {}
	}
}

function Home() {
	const { cookieValue, setCookieValue } = useCookies('darkMode', 'false')

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<Header />
				<section className='p-3'>
					<h1 className='mt-5 text-3xl text-white'>Theme: {cookieValue}</h1>
					<button
						className='mt-5 rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600 dark:bg-red-600 dark:hover:bg-red-700'
						onClick={() => setCookieValue('true')}>
						Change Theme
					</button>
				</section>
			</main>
		</>
	)
}

export default Home
