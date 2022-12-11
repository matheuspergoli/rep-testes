import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { SupabaseAdapter } from '@next-auth/supabase-adapter'

export default NextAuth({
	secret: process.env.NEXTAUTH_SECRET as string,
	providers: [
		GithubProvider({
			clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string
		})
	],
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
		secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string
	}),
	pages: {
		signIn: '/secure'
	}
})
