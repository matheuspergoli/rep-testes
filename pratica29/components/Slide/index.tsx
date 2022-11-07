import React from 'react'
import VideoCard from '../VideoCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

interface SlideProps {
  title: string
	data: {
		title: string
		link: string
		thumb: string
	}[]
}

function Slide(props: SlideProps) {
	return (
		<section>
			<h2 className='text-xl font-bold mb-2'>{props.title}</h2>
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
				{props.data.map((playlist) => (
					<SwiperSlide key={playlist.title}>{<VideoCard {...playlist} />}</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Slide
