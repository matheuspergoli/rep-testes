interface Post {
	id: string
	slug: string
	title: string
	excerpt: string
	coverImage: {
		url: string
	}
	author: {
		id: string
		name: string
		picture: {
			url: string
		}
	}
	category: {
		id: string
		name: string
		slug: string
	}
	content: string
}

interface Posts {
	allPosts: Array<Post>
}
