import React from 'react'
import Porta from '../components/Porta'
import PortaModel from '../model/porta'
import Presente from '../components/Presente'

function Home() {
	const [p1, setP1] = React.useState(new PortaModel(1))

	return (
		<div>
			<Porta porta={p1} />
		</div>
	)
}

export default Home
