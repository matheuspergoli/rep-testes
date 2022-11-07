import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import VideoCard from '../components/VideoCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

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
				<section>
					<h2 className='text-xl font-bold mb-2'>Podcasts</h2>
					<Swiper
						breakpoints={{
							320: { slidesPerView: 1 },
							425: { slidesPerView: 2 },
							768: { slidesPerView: 3 },
							1024: { slidesPerView: 5 },
							1230: { slidesPerView: 6 },
							1440: { slidesPerView: 7 },
							1536: { slidesPerView: 8 }
						}}>
						{props.data.podcasts.map((podcasts) => (
							<SwiperSlide key={podcasts.title}>
								<VideoCard {...podcasts} />
							</SwiperSlide>
						))}
					</Swiper>
				</section>

				<section>
					<h2 className='text-xl font-bold mb-2'>Músicas</h2>
					<Swiper
						breakpoints={{
							320: { slidesPerView: 1 },
							425: { slidesPerView: 2 },
							768: { slidesPerView: 3 },
							1024: { slidesPerView: 5 },
							1230: { slidesPerView: 6 },
							1440: { slidesPerView: 7 },
							1536: { slidesPerView: 8 }
						}}>
						{props.data.musicas.map((musica) => (
							<SwiperSlide key={musica.title}>
								<VideoCard {...musica} />
							</SwiperSlide>
						))}
					</Swiper>
				</section>

				<section>
					<h2 className='text-xl font-bold mb-2'>Front-end</h2>
					<Swiper
						breakpoints={{
							320: { slidesPerView: 1 },
							425: { slidesPerView: 2 },
							768: { slidesPerView: 3 },
							1024: { slidesPerView: 5 },
							1230: { slidesPerView: 6 },
							1440: { slidesPerView: 7 },
							1536: { slidesPerView: 8 }
						}}>
						{props.data.frontend.map((video) => (
							<SwiperSlide key={video.title}>
								<VideoCard {...video} />
							</SwiperSlide>
						))}
					</Swiper>
				</section>
			</main>
		</>
	)
}

export default Home
