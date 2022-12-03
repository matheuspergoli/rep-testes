import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	aside {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 7;
		color: #fff;
		padding: 120px 80px;
		background-color: #835afd;
	}

	img {
		max-width: 320px;
	}

	strong {
		margin-top: 16px;
		line-height: 42px;
		font: 700 36px 'Poppins', sans-serif;
	}

	p {
		color: #f8f8f8;
		font-size: 24px;
		margin-top: 16px;
		line-height: 32px;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 8;
		padding: 0 32px;
	}
`

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 320px;
	text-align: center;
	align-items: stretch;

	& > img {
		align-self: center;
	}

	h2 {
		font-size: 24px;
		margin: 64px 0 24px;
		font-family: 'Poppins', sans-serif;
	}

	form {
		input {
			height: 50px;
			padding: 0 16px;
			border-radius: 8px;
			background-color: #fff;
			border: 1px solid #a8a8b3;
		}

		button {
			margin-top: 16px;
		}

		button,
		input {
			width: 100%;
		}
	}

	p {
		color: #737380;
		font-size: 14px;
		margin-top: 16px;
		text-align: center;

		a {
			color: #e559f9;
		}
	}
`
