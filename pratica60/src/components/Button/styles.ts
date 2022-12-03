import styled from 'styled-components'

export const Button = styled.button`
	border: 0;
	color: #fff;
	height: 50px;
	padding: 0 32px;
	cursor: pointer;
	margin-top: 64px;
	font-weight: 500;
	border-radius: 8px;
	background: #835afd;
	transition: filter 0.2s;

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`
