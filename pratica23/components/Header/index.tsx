import React from 'react'
import Image from 'next/image'
import { TbLogout as LogoutIcon } from 'react-icons/tb'
import { signOut, useSession } from 'next-auth/react'

function Header() {
	const { data: session } = useSession()
	const srcImage = session?.user?.image as string

	return (
		<header className='px-3 py-2 bg-gray-800'>
			<section className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<figure>
						<Image
							loader={() => srcImage}
							src={srcImage}
							alt='Profile Image'
							width={40}
							height={40}
							unoptimized
							priority
							className='rounded-full'
						/>
					</figure>
					<h1 className='text-white'>{session?.user?.name}</h1>
				</div>
				<button onClick={() => signOut()} className='flex items-center gap-1 rounded-md px-2 py-1 font-bold text-lg bg-gray-300'>
					Sair
					<LogoutIcon className='text-2xl' />
				</button>
			</section>
		</header>
	)
}

export default Header
