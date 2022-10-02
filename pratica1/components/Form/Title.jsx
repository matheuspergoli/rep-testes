import React from 'react'

function Title() {
	return (
		<section className='p-3 rounded-md bg-bgTitle text-white'>
			<h2 className='flex flex-col sm:flex-row items-center justify-center gap-1'>
				<span className='font-semibold'>Try it free 7 days</span>
				then $20/mo. thereafter
			</h2>
		</section>
	)
}

export default Title
