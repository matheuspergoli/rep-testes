// Interface para um Post
interface Post {
	id: string
	title: string
	content: string
}

// Interface para um Array de Post
interface Posts {
	allPosts: Array<Post>
}
