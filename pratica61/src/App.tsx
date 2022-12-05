import React from 'react'
import { Auth } from './components/Auth'
import { Account } from './components/Account'
import { supabase } from './services/supabaseClient'

export const App = () => {
	const [session, setSession] = React.useState<any>(null)

	React.useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, [])

	return (
		<div className='container' style={{ padding: '50px 0 100px 0' }}>
			{!session ? <Auth /> : <Account key={session.user.id} session={session} />}
		</div>
	)
}
