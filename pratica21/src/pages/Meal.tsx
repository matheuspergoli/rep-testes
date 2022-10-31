import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function Meal() {
	const { id } = useParams()
	const { data } = useQuery(['meal', id], fetchMeal)

	async function fetchMeal() {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
		const json = await response.json()
		return json
	}

	console.log(data)

	return <div>{id}</div>
}

export default Meal
