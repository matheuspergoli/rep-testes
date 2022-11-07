import React from 'react'

interface VideoProps {
	title: string
	link: string
	thumb: string
}

function VideoCard(props: VideoProps) {
	return (
		<section className='w-40'>
			<a href={props.link} target='_blank' rel='noreferrer'>
				<img src={props.thumb} alt={props.title} />
				<h1 className='mt-1'>{props.title}</h1>
			</a>
		</section>
	)
}

export default VideoCard
