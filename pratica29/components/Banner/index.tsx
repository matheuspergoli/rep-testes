import React from 'react'

function Banner() {
	return (
		<header>
			<figure className='my-2 pl-3'>
				<img src='/aluratube.svg' alt='Logo AluraTube' />
			</figure>
			<figure className='h-60'>
				<img src='https://source.unsplash.com/random' alt='Banner' className='w-full h-full object-cover' />
			</figure>
		</header>
	)
}

export default Banner
