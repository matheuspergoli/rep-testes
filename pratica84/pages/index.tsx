import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { Products } from '../components/Products'
import { MainContainer } from '../components/MainContainer'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import { getPreviewProducts, getCategories } from '../service'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await Promise.all([
		queryClient.prefetchQuery('categories', getCategories),
		queryClient.prefetchQuery('products', getPreviewProducts)
	])

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

function Home() {
	const { data: products } = useQuery({ queryKey: 'products', queryFn: getPreviewProducts })
	const { data: categories } = useQuery({ queryKey: 'categories', queryFn: getCategories })

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<MainContainer>
				{categories && <Header categories={categories} />}
				{products && <Products products={products} />}
			</MainContainer>
		</>
	)
}

export default Home
