import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { GetServerSideProps } from 'next'

interface TokenDecoded {
	user: {
		id: string
		name: string
		email: string
	}
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { req, res } = context
	const cookies = nookies.get(context)
	const token = cookies.USER_TOKEN

	try {
		const secret = process.env.NEXT_PUBLIC_JWT_SECRET as string
		const decoded = jwt.verify(token, secret) as TokenDecoded
		return {
			props: {
				user: {
					id: decoded.user.id,
					name: decoded.user.name,
					email: decoded.user.email
				}
			}
		}
	} catch (error) {
		return {
			props: {}
		}
	}
}
