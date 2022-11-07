import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
	return (
		<Html lang='pt-br'>
			<Head>
				<meta name='application-name' content='AluraTube' />
				<meta name='keywords' content='alura, aluratube, nextjs' />
				<meta name='author' content='Matheus Pergoli' />
				<meta property='og:title' content='AluraTube' />
				<meta property='og:description' content='AluraTube - Imersão React' />
				<meta property='og:image' content='/aluratube-screen.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
