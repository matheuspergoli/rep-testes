function Post(props: Post) {
	return (
		<section className='w-full'>
			<img src={props.coverImage.url} alt='Post image' className='mb-5 w-full object-cover h-80' />
			<div className='px-3 sm:p-0'>
				<h2 className='text-3xl mb-3'>{props.title}</h2>
				<h3 className='text-lg mb-3'>{props.excerpt}</h3>
				<div className='flex items-center gap-5'>
					<img src={props.author.picture.url} alt='Author image' className='w-12 h-12 rounded-full' />
					<p className='text-lg font-bold'>{props.author.name}</p>
				</div>
			</div>
		</section>
	)
}

export default Post
