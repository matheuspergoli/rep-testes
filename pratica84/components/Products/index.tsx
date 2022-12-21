import React from 'react'
import Link from 'next/link'

interface ProductsData {
	products: {
		id: string
		name: string
		slug: string
		price: number
		exercpt: string
		category: {
			id: string
			name: string
		}
		coverImage: {
			url: string
		}
	}[]
}

export const Products = (props: ProductsData) => {
	return (
		<section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{props.products.map((product) => (
				<article key={product.id} className='rounded-lg bg-white shadow-lg'>
					<figure className='relative'>
						<Link
							href={`/category/${product.category.id}`}
							className='absolute left-0 rounded-tl-lg bg-gray-700 p-1 text-white transition hover:bg-gray-800'>
							{product.category.name}
						</Link>
						<img
							src={product.coverImage.url}
							alt={product.name}
							className='h-56 w-full rounded-t-lg object-cover'
						/>
					</figure>
					<div className='p-4'>
						<h3 className='text-lg font-semibold'>{product.name}</h3>
						<p className='text-gray-600'>{product.exercpt}</p>
						<div className='mt-4 flex items-center justify-between'>
							<span className='font-semibold'>${product.price}</span>
							<Link
								href={`/product/${product.slug}`}
								className='rounded-lg bg-gray-700 px-3 py-2 text-white transition hover:bg-gray-800'>
								View
							</Link>
						</div>
					</div>
				</article>
			))}
		</section>
	)
}
