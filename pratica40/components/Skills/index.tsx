import { Tooltip, Zoom } from '@mui/material'
import AnimateStaggered from '../../animation/AnimateStaggered'

interface SkillsProps {
	title: string
	image: any
	index: number
}

function Skills(props: SkillsProps) {
	return (
		<AnimateStaggered index={props.index}>
			<Tooltip title={props.title} TransitionComponent={Zoom} arrow>
				<section className='text-center cursor-pointer'>
					<h2 className='mb-1 text-xl'>{props.title}</h2>
					<figure className='group flex items-center justify-center text-5xl mx-auto w-32 h-24 clip-path hover:text-main-black text-white bg-main-blue'>
						{props.image}
					</figure>
				</section>
			</Tooltip>
		</AnimateStaggered>
	)
}

export default Skills
