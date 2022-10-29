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
				spaceBetween={25}
				navigation
				slidesPerView={1}
				breakpoints={{
					640: { slidesPerView: 2 },
					768: { slidesPerView: 3 }
				}}
				pagination={{ clickable: true }}
				className='max-w-5xl h-96'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
					<SwiperSlide key={index} className='rounded-md'>
						<section>
							<h1 className='text-center font-semibold text-xl'>
								Imagem {item}
							</h1>
							<img
								src={`https://source.unsplash.com/random`}
								className='w-full h-96 object-cover object-center'
							/>
						</section>
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	)
}

export default App
