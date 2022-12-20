import React from 'react'
import Head from 'next/head'
import { Products } from '../../components/Products'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import { getAllCategories, getAllByCategory } from '../../service'

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getAllCategories()).map(({ category }) => {
		return { params: { slug: category.id } }
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(['category', slug], () => getAllByCategory(slug))

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			slug
		},
		revalidate: 1
	}
}

function Category(props: { slug: string }) {
	const { data } = useQuery(['category', props.slug], () => getAllByCategory(props.slug))

	return (
		<>
			<Head>
				<title>Category</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>{data && <Products products={data} />}</main>
		</>
	)
}

export default Category
