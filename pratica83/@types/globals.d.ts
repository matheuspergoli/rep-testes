interface ProductProps {
	id: string
	name: string
	slug: string
	price: number
	description: string
	category: {
		id: string
		name: string
		slug: string
	}
	image: {
		responsiveImage: {
			src: string
		}
	}
}
