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
`

export const CreateRoomButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	color: #fff;
	height: 50px;
	font-size: 16px;
	padding: 0 32px;
	cursor: pointer;
	margin-top: 64px;
	font-weight: 500;
	border-radius: 8px;
	transition: filter 0.2s;
	background-color: #ea4335;

	img {
		margin-right: 8px;
	}

	&:hover {
		filter: brightness(0.9);
	}
`

export const Separator = styled.div`
	display: flex;
	align-items: center;
	color: #a8a8b3;
	margin: 32px 0;
	font-size: 14px;

	&::before {
		content: '';
		flex: 1;
		height: 1px;
		margin-right: 16px;
		background-color: #a8a8b3;
	}

	&::after {
		content: '';
		flex: 1;
		height: 1px;
		margin-left: 16px;
		background-color: #a8a8b3;
	}
`
