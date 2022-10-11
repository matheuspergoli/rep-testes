import React from 'react'
import { IconeLua, IconeSol } from '../Icons'

interface BotaoAlternarTemaProps {
	tema: string
	alternarTema: () => void
}

function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
	return props.tema === 'dark' ? (
		<div
			onClick={props.alternarTema}
			className='hidden sm:flex items-center justify-between w-14 lg:w-24 h-8 p-2 rounded-full cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600'>
			<div className='flex items-center justify-center w-6 h-6 rounded-full bg-white text-yellow-600'>
				{IconeSol(4)}
			</div>
			<div className='hidden lg:flex items-center text-white'>
				<span>Light</span>
			</div>
		</div>
	) : (
		<div
			onClick={props.alternarTema}
			className='hidden sm:flex items-center justify-between w-14 lg:w-24 h-8 p-2 rounded-full cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900'>
			<div className='hidden lg:flex items-center text-gray-300'>
				<span>Dark</span>
			</div>
			<div className='flex items-center justify-center w-6 h-6 rounded-full bg-black text-yellow-300'>
				{IconeLua(4)}
			</div>
		</div>
	)
}

export default BotaoAlternarTema
