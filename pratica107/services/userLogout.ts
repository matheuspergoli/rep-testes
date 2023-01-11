import nookies from 'nookies'

export const userLogout = async () => {
	nookies.destroy({}, 'user-token', {
		path: '/'
	})
}
