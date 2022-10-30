import React from 'react'
import { useQuery } from 'react-query'
import CardMeal from '../components/CardMeal'

interface MealCategories {
	meals: {
		strCategory: string
	}[]
}

function Home() {
	const { data } = useQuery('categories', fetchCategories)

	async function fetchCategories() {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
		const json = await response.json()
		return json as MealCategories
	}

	return (
		<main className='flex flex-col gap-10'>
			{data?.meals.map((category, index) => (
				<CardMeal key={index} {...category} />
			))}
		</main>
	)
}

export default Home
