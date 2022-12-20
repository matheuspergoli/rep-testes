import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProduct, getProductsSlugs } from '../../service'
import { QueryClient, dehydrate, useQuery } from 'react-query'

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getProductsSlugs()).map((product) => {
		return { params: { slug: product.slug } }
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(['product', slug], () => getProduct(slug))

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			slug
		},
		revalidate: 1
	}
}

function Product(props: { slug: string }) {
	const { data: product } = useQuery({
		queryKey: ['product', props.slug],
		queryFn: () => getProduct(props.slug)
	})

	return (
		<>
			<Head>
				<title>Product</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>
				<h1 className='mb-5 text-3xl font-bold'>{product?.name}</h1>
				<Link
					href='/'
					className='mb-5 block w-fit rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-700'>
					Back to home
				</Link>
				<section className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0'>
					<figure className='h-96 sm:h-[500px]'>
						<img
							src={product?.image.responsiveImage.src}
							alt={product?.name}
							className='max-h-full max-w-full'
						/>
					</figure>
					<article className='flex flex-col gap-5'>
						<div>
							<h2 className='text-2xl font-bold'>Description</h2>
							<p className='text-lg'>{product?.description}</p>
							<h2 className='text-2xl font-bold'>Price</h2>
							<p className='text-lg'>R$ {product?.price}</p>
						</div>
						<div className='flex gap-5'>
							<button className='rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-700'>
								Add to cart
							</button>
							<button className='rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-700'>
								Buy now
							</button>
						</div>
					</article>
				</section>
			</main>
		</>
	)
}

export default Product
