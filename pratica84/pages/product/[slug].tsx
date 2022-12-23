import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { QueryClient, useQuery, dehydrate } from 'react-query'
import { MainContainer } from '../../components/MainContainer'
import { getProductsSlug, getSingleProduct } from '../../service'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getProductsSlug()).map((product) => ({
		params: { slug: product.slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const slug = context.params?.slug
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['product', slug], () => getSingleProduct(slug as string))

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			slug
		},
		revalidate: 1
	}
}

interface Props {
	slug: string
}

function Product(props: Props) {
	const { data } = useQuery({
		queryKey: ['product', props.slug],
		queryFn: () => getSingleProduct(props.slug)
	})

	return (
		<>
			<Head>
				<title>{data?.name}</title>
			</Head>
			<MainContainer>
				{data && (
					<>
						<figure>
							<img src={data.mainImage.url} alt={data?.name} className='max-h-[450px] w-full object-cover' />
						</figure>
						<h1 className='text-3xl font-bold'>{data?.name}</h1>
						<p className='text-xl font-bold'>${data?.price}</p>
						<p className='mb-5 text-lg'>{data?.description}</p>
						<Link
							href='/'
							className='rounded-lg bg-gray-700 px-3 py-2 text-white transition hover:bg-gray-800'>
							Back to home
						</Link>
					</>
				)}
			</MainContainer>
		</>
	)
}

export default Product
