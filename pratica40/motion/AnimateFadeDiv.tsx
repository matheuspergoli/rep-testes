import React from 'react'
import { motion } from 'framer-motion'

const animations = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
}

function AnimateFadeDiv(props: { children: React.ReactNode }) {
	return (
		<motion.div variants={animations} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.4 }}>
			{props.children}
		</motion.div>
	)
}

export default AnimateFadeDiv
