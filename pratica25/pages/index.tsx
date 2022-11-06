import React from 'react'
import Head from 'next/head'

function Home() {
	const [data, setData] = React.useState()

	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://api-prismic-test.prismic.io/api/v2')
			const json = await response.json()
			setData(json)
		}
		fetchData()
	}, [])

	if (data) console.log(data)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<h1>NextJS App</h1>
			</main>
		</>
	)
}

export default Home
