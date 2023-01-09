import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
	const cookies = req.cookies.get('USER_TOKEN')?.value

	if (cookies) {
		const decoded = jwt.verify(cookies, process.env.NEXT_PUBLIC_JWT_SECRET as string)
		console.log(decoded)
	}
}

export const config = {
	matcher: '/auth/:path*'
}
