import * as jose from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
	const url = req.nextUrl.clone()
	url.pathname = '/login'

	const token = req.cookies.get('USER_TOKEN')?.value as string

	const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)

	try {
		const { payload } = await jose.jwtVerify(token, secret)
		return NextResponse.next({
			headers: {
				'x-user-token': token
			}
		})
	} catch (error) {
		return NextResponse.redirect(url)
	}
}

export const config = {
	matcher: '/auth/:path*'
}
