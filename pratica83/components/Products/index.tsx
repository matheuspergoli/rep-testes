import React from 'react'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { getAllProducts } from '../../service'

interface ProductsProps {
	id: string
	name: string
	slug: string
	price: number
	description: string
	image: {
		responsiveImage: {
			src: string
		}
	}
}

export const Products = () => {
	const { data: products } = useQuery<ProductsProps[]>({ queryKey: 'products', queryFn: getAllProducts })

	return (
		<section>
			<h1 className='mb-5 text-3xl font-bold'>Products</h1>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{products?.map((product) => (
					<div key={product.id} className='rounded-lg border bg-white shadow-lg'>
						<img
							src={product.image.responsiveImage.src}
							alt={product.name}
							className='h-64 w-full rounded-t-lg object-cover'
						/>
						<div className='p-4'>
							<h2 className='text-xl font-bold'>{product.name}</h2>
							<p className='text-gray-500'>{product.description}</p>
							<div className='mt-4 flex items-center justify-between'>
								<p className='text-xl font-bold'>${product.price}</p>
								<Link
									href={`/product/${product.slug}`}
									className='rounded-lg bg-gray-800 px-3 py-2 text-white hover:bg-gray-700'>
									View
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
