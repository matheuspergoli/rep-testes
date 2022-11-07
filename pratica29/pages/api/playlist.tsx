import { NextApiResponse, NextApiRequest } from 'next'

const data = {
	frontend: [
		{
			title: 'Next.js 13… this changes everything',
			link: 'https://www.youtube.com/watch?v=_w0Ikk4JY7U',
			thumb: 'https://i.ytimg.com/vi/_w0Ikk4JY7U/hqdefault.jpg'
		},
		{
			title: 'Next.js 13 - The Basics',
			link: 'https://www.youtube.com/watch?v=__mSgDEOyv8',
			thumb: 'https://i.ytimg.com/vi/__mSgDEOyv8/hqdefault.jpg'
		},
		{
			title: '5 useful CSS properties that get no love',
			link: 'https://www.youtube.com/watch?v=sNYVqfRwX1A',
			thumb: 'https://i.ytimg.com/vi/sNYVqfRwX1A/hqdefault.jpg'
		},
		{
			title: 'Top 5 JavaScript Tricks You NEED To Know',
			link: 'https://www.youtube.com/watch?v=SEET98etlbc',
			thumb: 'https://i.ytimg.com/vi/SEET98etlbc/hqdefault.jpg'
		},
		{
			title: "5 Pro-Level React Do's &  Don'ts",
			link: 'https://www.youtube.com/watch?v=4FhJkX18fS8',
			thumb: 'https://i.ytimg.com/vi/4FhJkX18fS8/hqdefault.jpg'
		},
		{
			title: 'Most Beginner React Developers Do This Wrong',
			link: 'https://www.youtube.com/watch?v=E1cklb4aeXA',
			thumb: 'https://i.ytimg.com/vi/E1cklb4aeXA/hqdefault.jpg'
		},
		{
			title: 'Clean Code vs Preference',
			link: 'https://www.youtube.com/watch?v=ou6x2qcLOLI',
			thumb: 'https://i.ytimg.com/vi/ou6x2qcLOLI/hqdefault.jpg'
		},
		{
			title: 'Do You Need To Learn Data Structures & Algorithms As A Developer?',
			link: 'https://www.youtube.com/watch?v=b_4ZchFAYRs',
			thumb: 'https://i.ytimg.com/vi/b_4ZchFAYRs/hqdefault.jpg'
		},
		{
			title: '6 Advanced Flexbox Features You Probably Don’t Know',
			link: 'https://www.youtube.com/watch?v=1zKX71GYisE',
			thumb: 'https://i.ytimg.com/vi/1zKX71GYisE/hqdefault.jpg'
		},
		{
			title: 'WTF are all these config files for?',
			link: 'https://www.youtube.com/watch?v=14WanxTD2O4',
			thumb: 'https://i.ytimg.com/vi/14WanxTD2O4/hqdefault.jpg'
		}
	],
	musicas: [
		{
			title: 'Kendrick Lamar - N95',
			link: 'https://www.youtube.com/watch?v=zI383uEwA6Q',
			thumb: 'https://i.ytimg.com/vi/zI383uEwA6Q/hqdefault.jpg'
		},
		{
			title: 'Lucky You (Feat. Joyner Lucas) [Official Audio]',
			link: 'https://www.youtube.com/watch?v=1arz9Q9qBas',
			thumb: 'https://i.ytimg.com/vi/1arz9Q9qBas/hqdefault.jpg'
		},
		{
			title: 'KORDHELL - MURDER IN MY MIND',
			link: 'https://www.youtube.com/watch?v=w-sQRS-Lc9k',
			thumb: 'https://i.ytimg.com/vi/w-sQRS-Lc9k/hqdefault.jpg'
		},
		{
			title: 'Ghostface Playa - Why Not',
			link: 'https://www.youtube.com/watch?v=Hh5jEQraXaw',
			thumb: 'https://i.ytimg.com/vi/Hh5jEQraXaw/hqdefault.jpg'
		},
		{
			title: 'Baby Keem, Kendrick Lamar - family ties (Official Video)',
			link: 'https://www.youtube.com/watch?v=v6HBZC9pZHQ',
			thumb: 'https://i.ytimg.com/vi/v6HBZC9pZHQ/hqdefault.jpg'
		},
		{
			title: 'Skrillex & Rick Ross - Purple Lamborghini [Official Video]',
			link: 'https://www.youtube.com/watch?v=ZkqyIoYAXV8',
			thumb: 'https://i.ytimg.com/vi/ZkqyIoYAXV8/hqdefault.jpg'
		},
		{
			title: 'Apashe - Uebok VIP [Music Video]',
			link: 'https://www.youtube.com/watch?v=gM4xZy39kNE',
			thumb: 'https://i.ytimg.com/vi/gM4xZy39kNE/hqdefault.jpg'
		},
		{
			title: 'Dies Irae feat. Black Prez',
			link: 'https://www.youtube.com/watch?v=qGyoLyHdyKw',
			thumb: 'https://i.ytimg.com/vi/qGyoLyHdyKw/hqdefault.jpg'
		},
		{
			title: 'RAVE',
			link: 'https://www.youtube.com/watch?v=AqHlQL3PoD8',
			thumb: 'https://i.ytimg.com/vi/AqHlQL3PoD8/hqdefault.jpg'
		},
		{
			title: 'Snails - Frogbass',
			link: 'https://www.youtube.com/watch?v=HanBb8FonWs',
			thumb: 'https://i.ytimg.com/vi/HanBb8FonWs/hqdefault.jpg'
		}
	],
	podcasts: [
		{
			title: 'ROBERTO JUSTUS - Flow # 134',
			link: 'https://www.youtube.com/watch?v=LhHE95dVc-4',
			thumb: 'https://i.ytimg.com/vi/LhHE95dVc-4/hqdefault.jpg'
		},
		{
			title: 'ELIAS KHALIL JABBOUR [+ ANDRÉ MARINHO] - Flow # 133',
			link: 'https://www.youtube.com/watch?v=MTxComygofA',
			thumb: 'https://i.ytimg.com/vi/MTxComygofA/hqdefault.jpg'
		},
		{
			title: 'DANILO GENTILI [+ DIGUINHO CORUJA] - Flow # 131',
			link: 'https://www.youtube.com/watch?v=8ZHE8MLZwD0',
			thumb: 'https://i.ytimg.com/vi/8ZHE8MLZwD0/hqdefault.jpg'
		},
		{
			title: 'LEO LINS [+ VINHETEIRO] - Flow # 130',
			link: 'https://www.youtube.com/watch?v=0qN2tZAbbRM',
			thumb: 'https://i.ytimg.com/vi/0qN2tZAbbRM/hqdefault.jpg'
		},
		{
			title: 'LULA - Flow # 124',
			link: 'https://www.youtube.com/watch?v=OAu9KJFbMhU',
			thumb: 'https://i.ytimg.com/vi/OAu9KJFbMhU/hqdefault.jpg'
		},
		{
			title: 'MATHEUS CEARÁ E BIANCA CAMPOS- TICARACATICAST | EP 195',
			link: 'https://www.youtube.com/watch?v=0wg3rkV8LOo',
			thumb: 'https://i.ytimg.com/vi/0wg3rkV8LOo/hqdefault.jpg'
		},
		{
			title: 'PAULO MUZY - TICARACATICAST | EP 164',
			link: 'https://www.youtube.com/watch?v=wvBeqdn4Yow',
			thumb: 'https://i.ytimg.com/vi/wvBeqdn4Yow/hqdefault.jpg'
		},
		{
			title: 'RENATO CARIANI - TICARACATICAST | EP 178',
			link: 'https://www.youtube.com/watch?v=4btwVBR-e-I',
			thumb: 'https://i.ytimg.com/vi/4btwVBR-e-I/hqdefault.jpg'
		},
		{
			title: 'GUI SANTANA E AMANDA RAMALHO - TICARACATICAST | EP 168',
			link: 'https://www.youtube.com/watch?v=05fWCwTOnf0',
			thumb: 'https://i.ytimg.com/vi/05fWCwTOnf0/hqdefault.jpg'
		},
		{
			title: 'CARLINHOS E GAGA DE ILHÉUS - TICARACATICAST | EP 158',
			link: 'https://www.youtube.com/watch?v=6JconlgrO0o',
			thumb: 'https://i.ytimg.com/vi/6JconlgrO0o/hqdefault.jpg'
		}
	]
}

function handler(req: NextApiRequest, res: NextApiResponse) {
	return res.status(200).json(data)
}

export default handler
