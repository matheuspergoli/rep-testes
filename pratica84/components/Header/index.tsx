import React from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'

interface HeaderData {
	categories: {
		id: string
		name: string
	}[]
}

export const Header = (props: HeaderData) => {
	return (
		<header className='mb-10 flex items-center justify-between'>
			<Link href='/' className='text-2xl font-bold'>
				Next Store
			</Link>
			<Menu as='nav' className='relative'>
				<Menu.Button className='rounded-lg bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 hover:bg-gray-100'>
					Categories
				</Menu.Button>
				<Menu.Items
					as='ul'
					className='absolute right-0 z-50 mt-2 w-48 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					{props.categories.map((category) => (
						<Menu.Item as='li' key={category.id}>
							<Link
								href={`/category/${category.id}`}
								className='block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
								{category.name}
							</Link>
						</Menu.Item>
					))}
				</Menu.Items>
			</Menu>
		</header>
	)
}
