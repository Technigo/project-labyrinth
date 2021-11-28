import styled from 'styled-components/macro'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: auto;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: auto;
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: hsla(0,0%,100%,.06274509803921569);
  backdrop-filter: blur(4px);
  font-family: 'Press Start 2P';

	@media (min-width: 324px){
		h1 {
			font-size: 16px;
			color: #C2D200;
		}

		p {
			font-size: 14px;
		}

		hr {
			width: 300px;
		}

		label {
			animation: blinker 2s linear infinite;
		}

		@keyframes blinker {
			50% {
				opacity: 0;
			}
		}

		form {
		display: flex;
		flex-direction: column; 
		justify-content: center;
		align-items: center;
		}

		input {
			margin-top: 20px;
			height: 24px;
			font-family: 'Press Start 2P';
			text-align:center;
		}

		::placeholder {
			font-family: 'Press Start 2P';

		}

		button {
			margin: 15px auto;
			padding: 8px;
			border-radius: 5px;
			border: 2px solid #C2D200;
			background-color: black;
			color:white;
			font-size: 14px;
			font-family: 'Press Start 2P';
			cursor: pointer;

		:hover {
			background: #C2D200;
			color: black;
		}

		span {
			color: red;
		}
}

	@media (min-width: 768px){
		h1 {
			font-size: 22px;
		}

		label {
			font-size: 18px;
		}

		button {
			font-size: 18px;
		}
		
		p {
			font-size: 18px;
		}
	}
}
`;