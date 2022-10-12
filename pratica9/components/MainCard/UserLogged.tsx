import React from 'react'

interface UserLoggedProps {
	userEmail: string
}

function UserLogged(props: UserLoggedProps) {
	return (
		<section className='mt-5'>
			<h1 className='font-bold text-xl text-center'>User</h1>
			<p className='text-center'>{props.userEmail}</p>
		</section>
	)
}

export default UserLogged
