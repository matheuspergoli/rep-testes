import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'

function App() {
	return (
		<main>
			<Swiper
				modules={[Navigation, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				className='max-w-5xl h-96'>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					1
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					2
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					3
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					4
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					5
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					6
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					7
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					8
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					9
				</SwiperSlide>
				<SwiperSlide className='p-1 text-center rounded-md text-xl font-bold text-white bg-gray-900'>
					10
				</SwiperSlide>
			</Swiper>
		</main>
	)
}

export default App
