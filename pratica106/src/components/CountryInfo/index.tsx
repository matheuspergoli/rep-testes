import React from 'react'
import { useQuery } from 'react-query'
import { getCountry } from '../../services'
import { BsArrowLeft as Arrow } from 'react-icons/bs'
import { useParams, useNavigate } from 'react-router-dom'

interface CountryInfoProps {
	name: {
		common: string
		official: string
	}
	population: number
	region: string
	subregion: string
	capital: string[]
	flags: {
		png: string
		svg: string
	}
	tld: string[]
	borders: string[]
}

export const CountryInfo = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { data } = useQuery<CountryInfoProps[]>(['country', id], () => getCountry(id as string))

	const country = data?.[0]

	const handleClick = () => {
		navigate('/')
	}

	return (
		<main className='container mx-auto px-3 sm:p-0'>
			<button
				onClick={() => handleClick()}
				className='mb-12 flex items-center gap-3 rounded-md border px-3 py-2 shadow-md dark:border-none dark:bg-dark-blue dark:text-white'>
				<Arrow />
				Back
			</button>
			<section className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
				<figure>
					<img className='border' src={country?.flags.svg} alt={country?.name.common} />
				</figure>
				<article className='dark:text-white'>
					<h1 className='mb-4 text-3xl font-semibold'>{country?.name.common}</h1>
					<p>
						<span className='font-semibold'>Native name:</span> {country?.name.official}
					</p>
					<p>
						<span className='font-semibold'>Population:</span> {country?.population}
					</p>
					<p>
						<span className='font-semibold'>Region:</span> {country?.region}
					</p>
					<p>
						<span className='font-semibold'>Sub Region:</span> {country?.subregion}
					</p>
					<p>
						<span className='font-semibold'>Capital:</span> {country?.capital}
					</p>
					<p>
						<span className='font-semibold'>Top Level Domain:</span> {country?.tld.map((item) => item)}
					</p>

					{country?.borders?.length ? (
						<div className='mt-8'>
							<p className='mb-2 font-semibold'>Border Countries:</p>
							{country?.borders?.map((item) => (
								<button
									key={item}
									className='mr-2 mb-2 w-fit rounded-md bg-gray-200 px-3 py-1 dark:bg-dark-blue dark:text-white'>
									{item}
								</button>
							))}
						</div>
					) : (
						<p className='mt-8 font-semibold'>No Border Countries!</p>
					)}
				</article>
			</section>
		</main>
	)
}
