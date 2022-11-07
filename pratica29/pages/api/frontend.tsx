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
		}
	]
}

function handler(req: NextApiRequest, res: NextApiResponse) {
	return res.status(200).json(data)
}

export default handler
