import React from 'react'

function Profile() {
	return (
		<article className='flex items-center gap-4 px-2 py-4'>
			<figure className='w-16'>
				<img src='https://github.com/matheuspergoli.png' alt='Profile image' className='rounded-full border' />
			</figure>
			<div>
				<h2 className='text-xl font-bold'>Matheus Pergoli</h2>
				<p>Desenvolvedor Front-end</p>
			</div>
		</article>
	)
}

export default Profile
