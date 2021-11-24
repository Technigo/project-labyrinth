import styled from 'styled-components/macro'

export const Section = styled.section`
		max-width:700px;
		//max-height: 300px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		padding: 20px;
		text-align: center;
		color: #fff;
		// blur effect (fönster skydd)
		background-color: hsla(0,0%,100%,.06274509803921569);
    backdrop-filter: blur(12px);

		@media (min-width:768px) {
			max-width:700px;
			max-height: 300px;
		}
`;

export const ContentContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin: 20px auto;
`;

export const Line = styled.hr`
	margin: 10px auto;
	border: 1px dashed white;
	width:400px;
`;

export const Title = styled.h1`
		margin: 0;
		font-size: 30px;
`;

export const ActionDescription = styled.p`
	font-style: italic;
`;

export const Button = styled.button`
	padding: 10px;
	border-radius: 10px;
	border:none;
	background-color: black;
	color:white;

	:hover {
		background: white;
		color: black;
		border: 1px solid black;
	}
`;