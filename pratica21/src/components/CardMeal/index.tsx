import React from 'react'
import { useQuery } from 'react-query'

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
			<div className='flex flex-col gap-5'>
				<h1 className='text-2xl font-bold mb-2'>{props.strCategory}</h1>
				{data?.meals.map((meal) => (
					<figure key={meal.idMeal} className='w-60 h-60'>
						<figcaption>{meal.strMeal}</figcaption>
						<img src={`${meal.strMealThumb}`} alt={`${meal.strMeal}`} className='w-full h-full' />
					</figure>
				))}
			</div>
		</section>
	)
}

export default CardMeal
