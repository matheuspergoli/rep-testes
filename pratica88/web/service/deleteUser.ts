export const deleteUser = async (id: string) => {
	await fetch(`http://localhost:8080/users/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id })
	})
}
