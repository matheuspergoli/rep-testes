interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}

export const getAllProducts = async () => {
	const response = await fetch('https://fakestoreapi.com/products')
	const json = await response.json()
	return json as Product[]
}
