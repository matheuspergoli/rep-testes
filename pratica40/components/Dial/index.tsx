import { SiYahoo as YahooImg } from 'react-icons/si'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { FaFacebookF as FaceImg } from 'react-icons/fa'
import { FaLinkedin as LinkedInImg } from 'react-icons/fa'
import { SiMicrosoftoutlook as OutlookImg } from 'react-icons/si'
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'

const actions = [
	{
		icon: (
			<a className='flex items-center justify-center w-14 text-2xl' href='https://github.com/matheuspergoli' target='_blank' rel='noreferrer'>
				<GitImg className='w-full text-main-blue' />
			</a>
		),
		nome: 'Github'
	},
	{
		icon: (
			<a
				className='flex items-center justify-center w-14 text-2xl'
				href='https://www.facebook.com/matheus.pwal'
				target='_blank'
				rel='noreferrer'>
				<FaceImg className='w-full text-main-blue' />
			</a>
		),
		nome: 'Facebook'
	},
	{
		icon: (
			<a className='flex items-center justify-center w-14 text-2xl' href='mailto:heizwow@outlook.com' target='_blank' rel='noreferrer'>
				<OutlookImg className='w-full text-main-blue' />
			</a>
		),
		nome: 'Outlook'
	},
	{
		icon: (
			<a className='flex items-center justify-center w-14 text-2xl' href='mailto:matheus.pergoli2015@yahoo.com' target='_blank' rel='noreferrer'>
				<YahooImg className='w-full text-main-blue' />
			</a>
		),
		nome: 'Yahoo'
	},
	{
		icon: (
			<a
				className='flex items-center justify-center w-14 text-2xl'
				href='https://www.linkedin.com/in/matheuspergoli/'
				target='_blank'
				rel='noreferrer'>
				<LinkedInImg className='w-full text-main-blue' />
			</a>
		),
		nome: 'LinkedIn'
	}
]

function Dial() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<SpeedDial
				ariaLabel='SpeedDial'
				icon={<SpeedDialIcon />}
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
				FabProps={{ size: 'large', style: { backgroundColor: '#04c2c9', color: '#333' } }}>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.nome}
						icon={action.icon}
						tooltipTitle={action.nome}
						FabProps={{ size: 'medium', style: { backgroundColor: '#333' } }}
					/>
				))}
			</SpeedDial>
		</Box>
	)
}

export default Dial
