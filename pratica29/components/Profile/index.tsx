import React from 'react'

function Profile() {
	return (
		<section className='flex items-center gap-4 p-2'>
			<figure className='w-16'>
				<img src='https://github.com/matheuspergoli.png' alt='Profile image' className='rounded-full' />
			</figure>
      <div>
        <h2 className='text-xl font-bold'>Matheus Pergoli</h2>
        <p>Desenvolvedor Front-end</p>
      </div>
		</section>
	)
}

export default Profile
