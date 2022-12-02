import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
	return (
		<Html>
			<Head lang='pt-br' />
			<body className='transition dark:bg-zinc-800 dark:text-white'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
