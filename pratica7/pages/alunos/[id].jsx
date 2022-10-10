export function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
			{ params: { id: '4' } },
			{ params: { id: '5' } }
		]
	}
}

export async function getStaticProps(context) {
	const id = context.params.id

	const response = await fetch(`http://localhost:3000/api/alunos/${id}`)
	const aluno = await response.json()

	return {
		props: { id, aluno }
	}
}

function AlunoPorId({ id, aluno }) {
	return (
		<main>
			<h1 className='text-3xl font-bold mb-5'>Detalhes do Aluno</h1>
			<section className='p-2 w-fit rounded-md border'>
				{aluno.map(({ id, nome }) => (
					<>
						<p key={id}>Nome do Aluno: {nome}</p>
						<p>Número do Aluno: {id}</p>
					</>
				))}
			</section>
		</main>
	)
}

export default AlunoPorId
