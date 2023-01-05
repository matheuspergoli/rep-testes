import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
	// Configure one or more authentication providers
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET as string,
	providers: [
		GithubProvider({
			clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string
		})
		// ...add more providers here
	]
}

export default NextAuth(authOptions)
