import React from 'react'
import { motion } from 'framer-motion'

const animations = {
	initial: { scaleY: 0 },
	animate: { scaleY: 1 },
	exit: { scaleY: 0 }
}

function AnimateScaleDiv(props: { children: React.ReactNode }) {
	return (
		<motion.div variants={animations} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.3 }}>
			{props.children}
		</motion.div>
	)
}

export default AnimateScaleDiv
