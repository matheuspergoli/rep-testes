import React from 'react'
import { useQuery } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

interface MealsProps {
	meals: {
		idMeal: number
		strMeal: string
		strMealThumb: string
	}[]
}

function CardMeal(props: { strCategory: string }) {
	const { data } = useQuery(['meals', props.strCategory], fetchMeals)

	async function fetchMeals() {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.strCategory}`)
		const json = await response.json()
		return json as MealsProps
	}

	return (
		<section className='m-5'>
			<h2 className='text-2xl font-bold mb-2 text-amber-500'>{props.strCategory}</h2>
			<Swiper
				modules={[Navigation, FreeMode]}
				slidesPerView={1}
				spaceBetween={20}
				navigation
				freeMode
				grabCursor
				breakpoints={{
					640: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 4 },
					1280: { slidesPerView: 5 },
					1536: { slidesPerView: 6 }
				}}>
				{data?.meals.map((meal) => (
					<SwiperSlide key={meal.idMeal} className='text-center'>
						<Link to={`/meal/${meal.idMeal}`}>
							<figure className='mx-auto w-60 h-60'>
								<img src={`${meal.strMealThumb}`} alt={`${meal.strMeal}`} className='w-full h-full' />
							</figure>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default CardMeal
