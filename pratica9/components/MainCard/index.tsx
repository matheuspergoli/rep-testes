import Form from './Form'
import Title from './Title'

function MainCard() {
	return (
		<main className='flex items-center justify-center w-screen h-screen bg-black'>
			<section className='w-80 p-5 rounded-md bg-white'>
				<Title title='Formúlario' />
				<Form />
			</section>
		</main>
	)
}

export default MainCard
