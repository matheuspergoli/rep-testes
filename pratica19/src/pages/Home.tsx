import React from 'react'
import { useQuery } from 'react-query'
import CardFilm from '../components/CardFilm'

interface FilmProps {
	id: number
	title: string
	backdrop_path: string
	poster_path: string
	vote_average: number
	release_date: string
}

function Home() {
	const [page, setPage] = React.useState(1)
	const { data, status } = useQuery(['films', page], fetchFilms)

	async function fetchFilms() {
		const API_TOKEN = import.meta.env.VITE_API_TOKEN
		const url = `https://api.themoviedb.org/3/movie/popular?api_key=2d2c631e6606e4874e84c06e798636d9&page=${page}`
		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${API_TOKEN}`,
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()
		return json
	}

	function nextPage() {
		setPage((prevPage) => prevPage + 1)
	}

	function prevPage() {
		setPage((prevPage) => prevPage - 1)
	}

	if (status === 'loading') return <h1 className='text-2xl'>Carregando</h1>
	return (
		<>
			<main className='flex items-center justify-center flex-wrap gap-5 px-5 mt-5 mx-auto max-w-7xl'>
				{data.results.map((film: FilmProps) => (
					<CardFilm key={film.id} {...film} />
				))}
			</main>
			<div className='flex gap-5 justify-center items-center my-5 mx-auto max-w-7xl'>
				<button className='px-4 py-1 text-xl bg-gray-900 text-white disabled:opacity-50' onClick={prevPage} disabled={page === 1}>
					Anterior
				</button>
				<button className='px-4 py-1 text-xl bg-gray-900 text-white' onClick={nextPage}>
					Próximo
				</button>
			</div>
		</>
	)
}

export default Home
