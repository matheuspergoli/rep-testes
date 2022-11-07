import Head from 'next/head'
import Slide from '../components/Slide'
import { GetServerSideProps } from 'next'
import Banner from '../components/Banner'
import Profile from '../components/Profile'

interface DataProps {
	data: {
		frontend: {
			title: string
			link: string
			thumb: string
		}[]
		musicas: {
			title: string
			link: string
			thumb: string
		}[]
		podcasts: {
			title: string
			link: string
			thumb: string
		}[]
	}
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('http://localhost:3000/api/playlist')
	const data = await response.json()

	return {
		props: { data }
	}
}

function Home(props: DataProps) {
	return (
		<>
			<Head>
				<title>AluraTube</title>
			</Head>
			<Banner />
			<Profile />
			<main className='px-2'>
				<Slide title='Podcasts' data={props.data.podcasts} />
				<Slide title='Músicas' data={props.data.musicas} />
				<Slide title='Front-end' data={props.data.frontend} />
			</main>
		</>
	)
}

export default Home
