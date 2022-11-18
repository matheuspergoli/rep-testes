import { motion } from 'framer-motion'

function AnimateStaggered(props: { children: React.ReactNode; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: -50, translateY: -50 }}
			animate={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration: 0.5, delay: props.index * 0.05 }}>
			{props.children}
		</motion.div>
	)
}

export default AnimateStaggered
