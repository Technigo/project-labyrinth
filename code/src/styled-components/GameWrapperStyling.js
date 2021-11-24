import styled from 'styled-components/macro'

export const Section = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	
`;

export const ContentContainer = styled.section`
	width: 80%;
	//max-height: 300px;
	padding: 20px;
	text-align: center;
	color: #fff;
	// blur effect (fönster skydd)
	background-color: hsla(0,0%,100%,.06274509803921569);
	backdrop-filter: blur(6px);
	margin: 20px auto;

	/* @media (min-width:768px) {
		max-width:700px;
		max-height: 300px;
	} */
`;

export const Line = styled.hr`
	margin: 10px auto;
	border: 1px dashed #C2D200;
	width: 400px;
`;

export const Title = styled.h1`
		margin: 0;
		font-size: 18px;
`;

export const ActionDescription = styled.p`
	font-style: italic;
`;

export const Button = styled.button`
	padding: 10px;
	border-radius: 10px;
	border: 2px solid #C2D200;
	background-color: black;
	color:white;

	:hover {
		background: white;
		color: black;
		border: 1px solid black;
	}
`;