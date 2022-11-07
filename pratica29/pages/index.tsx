import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Banner from '../components/Banner'
import VideoCard from '../components/VideoCard'
import Profile from '../components/Profile'

interface DataProps {
	data: {
		frontend: {
			title: string
			link: string
			thumb: string
		}[]
	}
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('http://localhost:3000/api/frontend')
	const data = await response.json()

	return {
		props: { data }
	}
}

function Home(props: DataProps) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Banner />
			<Profile />
			<main className='flex gap-2 p-2'>
				<article>
					<h2 className='text-xl font-bold mb-2'>Front-end</h2>
          <div className='flex gap-2'>
            {props.data.frontend.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
				</article>
			</main>
		</>
	)
}

export default Home
