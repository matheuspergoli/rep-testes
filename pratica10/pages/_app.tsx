import '../styles/globals.css'
import { DarkModeContextProvider } from '../context/DarkModeContext'

function MyApp({ Component, pageProps }) {
	return (
		<DarkModeContextProvider>
			<Component {...pageProps} />
		</DarkModeContextProvider>
	)
}

export default MyApp
