import React from 'react'

interface VideoProps {
	title: string
	link: string
	thumb: string
}

function VideoCard(props: VideoProps) {
	return (
		<article className='w-48 overflow-hidden'>
			<a href={props.link} target='_blank' rel='noreferrer'>
				<img src={props.thumb} alt={props.title} className='transition hover:scale-105' />
				<h2 className='mt-1 leading-5'>{props.title}</h2>
			</a>
		</article>
	)
}

export default VideoCard
