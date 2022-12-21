import React from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Products } from '../../components/Products'
import { QueryClient, useQuery, dehydrate } from 'react-query'
import { MainContainer } from '../../components/MainContainer'
import { getCategories, getProductsByCategory } from '../../service'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getCategories()).map((product) => {
		return {
			params: {
				id: product.id
			}
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const queryClient = new QueryClient()
	const id = context.params?.id as string

	await Promise.all([
		queryClient.prefetchQuery('categories', getCategories),
		queryClient.prefetchQuery(['products', id], () => getProductsByCategory(id))
	])

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			id
		},
		revalidate: 1
	}
}

function Product(props: { id: string }) {
	const { data: products } = useQuery({
		queryKey: ['products', props.id],
		queryFn: () => getProductsByCategory(props.id)
	})

	const { data: categories } = useQuery({ queryKey: 'categories', queryFn: getCategories })

	return (
		<>
			<Head>
				<title>Products</title>
			</Head>
			<MainContainer>
				{categories && <Header categories={categories} />}
				{products && <Products products={products} />}
			</MainContainer>
		</>
	)
}

export default Product
