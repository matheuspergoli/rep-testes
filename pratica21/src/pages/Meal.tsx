import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

interface MealProps {
	meals: {
		strMeal: string
		strMealThumb: string
		strInstructions: string
	}[]
}

function Meal() {
	const { id } = useParams()
	const { data } = useQuery(['meal', id], fetchMeal)
	const [ingredients, setIngredients] = React.useState<Array<{ ingredient: string; measure: string }>>()

	async function fetchMeal() {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
		const json = await response.json()
		return json as MealProps
	}

	React.useEffect(() => {
		function generateIngredients() {
			const ingredients = []
			for (let i = 0; i <= 20; i++) {
				if (data?.meals[0][`strIngredient${i}`]) {
					ingredients.push({
						ingredient: data?.meals[0][`strIngredient${i}`],
						measure: data?.meals[0][`strMeasure${i}`]
					})
				}
			}
			setIngredients(ingredients)
		}
		generateIngredients()
	}, [data?.meals])

	console.log(data?.meals[0])

	return (
		<main className='px-5 pb-5'>
			<figure>
				<img src={`${data?.meals[0].strMealThumb}`} alt={`${data?.meals[0].strMeal}`} className='mx-auto h-96 w-96' />
			</figure>
			<h1 className='text-2xl mb-5 font-bold text-center text-amber-600'>{data?.meals[0].strMeal}</h1>
			<div className='flex flex-col gap-3'>
				<h2 className='text-center text-xl font-bold text-amber-500'>How to prepare</h2>
				<p className='max-w-xl text-center mx-auto text-amber-500'>{data?.meals[0].strInstructions}</p>
				<h2 className='text-center text-xl font-bold text-amber-500'>Ingredients & Measurements</h2>
				{ingredients?.map((meal, index) => (
					<div key={index} className='flex justify-center gap-2'>
						{meal.ingredient && (
							<p className='text-xl py-1 text-center px-5 rounded-full font-semibold bg-amber-800 text-amber-500'>{meal.ingredient}</p>
						)}
						{meal.measure && (
							<p className='text-xl py-1 text-center px-5 rounded-full font-semibold bg-amber-800 text-amber-500'>{meal.measure}</p>
						)}
					</div>
				))}
			</div>
		</main>
	)
}

export default Meal
