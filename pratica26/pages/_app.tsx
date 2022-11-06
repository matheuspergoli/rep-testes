import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PrismicProvider
			internalLinkComponent={({ href, ...props }) => (
				<Link href={href}>
					<a {...props} />
				</Link>
			)}>
			<Component {...pageProps} />
		</PrismicProvider>
	)
}
