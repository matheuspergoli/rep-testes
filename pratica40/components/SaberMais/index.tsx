import React from 'react'
import { motion } from 'framer-motion'

function SaberMais() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<>
			<h2 className='text-2xl text-center mb-5 font-semibold mt-20'>Gostaria de saber um pouco mais ?</h2>
			<motion.section
				layout
				initial={{ borderRadius: 50 }}
				data-isopen={isOpen}
				onClick={() => setIsOpen(!isOpen)}
				className={`
        text-xl 
        w-24 
        h-24 
        p-5 
        mx-auto 
        cursor-pointer 
        overflow-hidden 
        text-center 
        selection:bg-transparent 
        data-[isOpen="true"]:h-auto 
        data-[isOpen="true"]:max-w-2xl 
        data-[isOpen="true"]:w-full 
        bg-main-black 
        ${isOpen ? 'text-white' : 'text-transparent'}`}>
				<p>Eu também gosto muito de jogar, meu estilo de jogo preferido é MMORPG. (Sou péssimo em FPS 😅)</p>
				<p>Já fui viciado em World of Warcraft, mas consegui me livrar, porém quem sabe na próxima expansão. 🙄</p>
				<p>Hoje meu gosto é bem variado e venho jogando diversos jogos quando não estou estudando.</p>
				<p>Também adoro músicas, sempre que estou praticando estou ouvindo algo.</p>
				<p>Séries e filmes nem se fala, quase todo dia vejo um filme novo.</p>
				<p>
					Caso queira ter uma conversa mais descontraída me add no Discord <span className='text-main-blue'>Matheus🌙#6691</span>
				</p>
			</motion.section>
		</>
	)
}

export default SaberMais
