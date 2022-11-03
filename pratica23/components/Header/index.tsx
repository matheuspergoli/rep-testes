import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

function Header() {
	const { data: session } = useSession()
	const srcImage = session?.user?.image as string

	return (
		<header className='px-3 py-2 bg-gray-700'>
			<section className='flex items-center gap-3'>
				<figure>
					<Image
						loader={() => srcImage}
						src={srcImage}
						alt='Profile Image'
						width={50}
						height={50}
						unoptimized
						priority
						className='rounded-full'
					/>
				</figure>
				<h1 className='text-white'>{session?.user?.name}</h1>
			</section>
		</header>
	)
}

export default Header
