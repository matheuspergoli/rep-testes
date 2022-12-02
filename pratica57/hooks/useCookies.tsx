import React from 'react'
import { setCookie } from 'nookies'

function useCookies(name: string, value: string, options?: any) {
	const [cookieValue, setCookieValue] = React.useState(value)

	React.useEffect(() => {
		const optionsDefault = {
			path: '/',
			maxAge: 86400 * 7
		}
		setCookie(null, name, cookieValue, options || optionsDefault)
	}, [cookieValue, name, value, options])

	return { cookieValue, setCookieValue }
}

export default useCookies
