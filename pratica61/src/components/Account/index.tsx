import React from 'react'
import { Avatar } from '../Avatar'
import { supabase } from '../../services/supabaseClient'

export const Account = ({ session }: any) => {
	const [loading, setLoading] = React.useState(true)
	const [username, setUsername] = React.useState(null)
	const [website, setWebsite] = React.useState(null)
	const [avatar_url, setAvatarUrl] = React.useState(null)

	React.useEffect(() => {
		getProfile()
	}, [session])

	const getProfile = async () => {
		try {
			setLoading(true)
			const { user } = session

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single()

			if (error && status !== 406) {
				throw error
			}

			if (data) {
				setUsername(data.username)
				setWebsite(data.website)
				setAvatarUrl(data.avatar_url)
			}
		} catch (error: any) {
			alert(error.message)
		} finally {
			setLoading(false)
		}
	}

	const updateProfile = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			setLoading(true)
			const { user } = session

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date()
			}

			let { error } = await supabase.from('profiles').upsert(updates)

			if (error) {
				throw error
			}
		} catch (error: any) {
			alert(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div aria-live='polite'>
			{loading ? (
				'Saving ...'
			) : (
				<form onSubmit={updateProfile} className='form-widget'>
					<Avatar
						url={avatar_url}
						size={150}
						onUpload={(url: any) => {
							setAvatarUrl(url)
							updateProfile({ username, website, avatar_url: url })
						}}
					/>

					<div>Email: {session.user.email}</div>
					<div>
						<label htmlFor='username'>Name</label>
						<input
							id='username'
							type='text'
							value={username || ''}
							onChange={(e) => setUsername(e.target.value as any)}
						/>
					</div>
					<div>
						<label htmlFor='website'>Website</label>
						<input
							id='website'
							type='url'
							value={website || ''}
							onChange={(e) => setWebsite(e.target.value as any)}
						/>
					</div>
					<div>
						<button className='button primary block' disabled={loading}>
							Update profile
						</button>
					</div>
				</form>
			)}
			<button
				type='button'
				className='button block'
				onClick={() => supabase.auth.signOut()}>
				Sign Out
			</button>
		</div>
	)
}
