import '../styles/globals.css'
import { UserLoggedContextProvider } from '../context/UserLoggedContext'
import { DarkModeContextProvider } from '../context/DarkModeContext'

function MyApp({ Component, pageProps }) {
	return (
		<UserLoggedContextProvider>
			<DarkModeContextProvider>
				<Component {...pageProps} />
			</DarkModeContextProvider>
		</UserLoggedContextProvider>
	)
}

export default MyApp
