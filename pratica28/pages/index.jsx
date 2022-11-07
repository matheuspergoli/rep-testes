import config from '../config.json'
import styled from 'styled-components'

export default function Home() {
	return (
		<main>
			<Header />
			<Timeline />
		</main>
	)
}

const StyledHeader = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
`

function Header() {
	return (
		<StyledHeader>
			<figure>
				<img src={`https://github.com/${config.github}.png`} alt='Profile' />
			</figure>
			<div>
				<p>{config.name}</p>
				<p>{config.job}</p>
			</div>
		</StyledHeader>
	)
}

function Timeline() {
	const tituloPlaylists = Object.keys(config.playlists)

	return (
		<section>
			<div>
				{tituloPlaylists.map((titulo) => (
          <h1>{titulo}</h1>
				))}
			</div>
		</section>
	)
}
