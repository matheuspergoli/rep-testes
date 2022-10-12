import '../styles/globals.css'
import { UserLoggedContextProvider } from '../context/UserLoggedContext'

function MyApp({ Component, pageProps }) {
	return (
		<UserLoggedContextProvider>
			<Component {...pageProps} />
		</UserLoggedContextProvider>
	)
}

export default MyApp
