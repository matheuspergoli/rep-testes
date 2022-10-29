import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

function App() {
	return (
		<main>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				className='max-w-5xl h-96'>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
						{item}
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	)
}

export default App
