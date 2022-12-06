import React from 'react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const Home = () => {
	const user = useUser()
	const supabaseClient = useSupabaseClient()

	return (
		<Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
	)
}

export default Home
