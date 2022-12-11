import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
	function middleware(req) {
		return NextResponse.redirect(new URL('/secure', req.url))
	},
	{
		callbacks: {
			authorized({ token }) {
				const hasEmail = token?.email === '' ? false : true
				return hasEmail
			}
		}
	}
)

export const config = {
	matcher: ['/secure/:path*']
}
