import Head from 'next/head'
import Title from '../components/Title'
import Countries from '../components/Countries'

export async function getStaticProps() {
	const response = await fetch('https://restcountries.com/v3.1/all')
	const data = await response.json()

	return {
		props: { data }
	}
}

function Home({ data }) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Title />
			<Countries data={data} />
		</>
	)
}

export default Home
