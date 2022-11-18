import Head from 'next/head'
import Title from '../components/Title'
import Skills from '../components/Skills'
import ReactSkillbar from 'react-skillbars'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'
import { FaReact as ReactImg } from 'react-icons/fa'
import { GiBrazilFlag as BrImg } from 'react-icons/gi'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { TbBrandNextjs as Nextjs } from 'react-icons/tb'
import { RiEnglishInput as ENImg } from 'react-icons/ri'
import { GiSmartphone as PhoneImg } from 'react-icons/gi'
import { SiTailwindcss as TailImg } from 'react-icons/si'
import { DiCss3 as CSSImg, DiSass as SassImg } from 'react-icons/di'
import { SiHtml5 as HtmlImg, SiJavascript as JSImg } from 'react-icons/si'
import { SiTypescript as TSImg, SiStyledcomponents as StyledImg } from 'react-icons/si'

const skills = [
	{ type: 'HTML5', level: 80 },
	{ type: 'CSS3', level: 80 },
	{ type: 'JavaScript', level: 70 },
	{ type: 'NextJS', level: 60 },
	{ type: 'React', level: 60 },
	{ type: 'TypeScript', level: 55 },
	{ type: 'TailwindCSS', level: 65 },
	{ type: 'Git/Github', level: 60 }
]

const colors = {
	bar: '#04c2c9',
	title: {
		text: '#fff',
		background: '#333'
	}
}

function Habilidades() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Habilidades</title>
			</Head>
			<main className='p-3'>
				<Title>Minhas Habilidades</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={1} title='HTML5' image={<HtmlImg className='group-hover:scale-125 transition' />} />
					<Skills index={2} title='CSS3' image={<CSSImg className='group-hover:scale-125 transition' />} />
					<Skills index={3} title='JavaScript' image={<JSImg className='group-hover:scale-125 transition' />} />
					<Skills index={4} title='NextJS' image={<Nextjs className='group-hover:scale-125 transition' />} />
					<Skills index={5} title='React' image={<ReactImg className='group-hover:scale-125 transition' />} />
					<Skills index={6} title='TypeScript' image={<TSImg className='group-hover:scale-125 transition' />} />
					<Skills index={7} title='Styled-Components' image={<StyledImg className='group-hover:scale-125 transition' />} />
				</section>
				<Title>Outros Conhecimentos</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={8} title='Responsividade' image={<PhoneImg className='group-hover:scale-125 transition' />} />
					<Skills index={9} title='TailwindCSS' image={<TailImg className='group-hover:scale-125 transition' />} />
					<Skills index={10} title='SCSS' image={<SassImg className='group-hover:scale-125 transition' />} />
					<Skills index={11} title='Git-Github' image={<GitImg className='group-hover:scale-125 transition' />} />
				</section>
				<Title>Idiomas</Title>
				<section className='flex flex-wrap items-center justify-evenly gap-2 pl-5 pr-5 pb-5'>
					<Skills index={12} title='Inglês-US' image={<ENImg className='group-hover:scale-125 transition' />} />
					<Skills index={13} title='Português-BR' image={<BrImg className='group-hover:scale-125 transition' />} />
				</section>
				<Title>Principais habilidades</Title>
				<section className='mx-auto max-w-5xl pl-5 pr-5 pb-5 text-main-black'>
					<ReactSkillbar skills={skills} colors={colors} animationDelay={250} />
				</section>
			</main>
		</AnimateFadeDiv>
	)
}

export default Habilidades
