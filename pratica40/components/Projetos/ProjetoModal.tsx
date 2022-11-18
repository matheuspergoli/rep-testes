import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'

interface ProjetoModalProps {
	tech: string
	link: string
	rep: string
	nome: string
	source: string
}

function ProjetoModal(props: ProjetoModalProps) {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<img onClick={handleOpen} src={props.source} alt={props.nome} />
			<Dialog PaperProps={{ style: { backgroundColor: '#333' } }} open={open} onClose={handleClose}>
				<DialogTitle className='text-2xl text-center text-white'>
					Tech: <span className='block text-main-blue'>{props.tech}</span>
				</DialogTitle>
				<DialogContent className='flex flex-wrap justify-center gap-5'>
					<a className='p-3 text-2xl bg-main-blue' href={props.link} target='_blank' rel='noreferrer' onClick={handleClose}>
						Ir para site
					</a>
					<a className='p-3 text-2xl bg-main-blue' href={props.rep} target='_blank' rel='noreferrer' onClick={handleClose}>
						Repositório
					</a>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default ProjetoModal
