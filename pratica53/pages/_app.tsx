import React from 'react'
import store from '../store'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}
