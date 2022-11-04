import React from 'react'
import Image from 'next/image'
import { Menu, MenuItem } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import { TbLogout as LogoutIcon } from 'react-icons/tb'

function Header() {
	const anchorRef: any = React.useRef()
	const [openMenu, setOpenMenu] = React.useState(false)
	const { data: session } = useSession()
	const srcImage = session?.user?.image as string

	const handleClose = () => setOpenMenu(false)
	const handleOpen = () => setOpenMenu(true)

	return (
		<header className='px-3 py-2 bg-gray-800'>
			<section className='flex items-center gap-20'>
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
				<button className='text-xl font-semibold text-white' onClick={handleOpen} ref={anchorRef}>
					Menu
				</button>
				<Menu open={openMenu} onClose={handleClose} anchorEl={anchorRef.current} className='text-center'>
					<MenuItem onClick={handleClose}>Repositórios</MenuItem>
					<MenuItem onClick={handleClose}>Buscar</MenuItem>
					<MenuItem onClick={handleClose}>
						<button onClick={() => signOut()}>Sair</button>
					</MenuItem>
				</Menu>
			</section>
		</header>
	)
}

export default Header
