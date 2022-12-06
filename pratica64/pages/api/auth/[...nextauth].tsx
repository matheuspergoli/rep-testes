import NextAuth from 'next-auth'
import { SupabaseAdapter } from '@next-auth/supabase-adapter'

export default NextAuth({
	providers: [],
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL,
		secret: process.env.NEXT_PUBLIC_SUPABASE_KEY
	})
})
