import styled from 'styled-components/macro'
import BG1 from './img/bg1.png'

export const MainWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ConsoleContainer = styled.section`
	max-width: 450px;
	background: #905efc;
	min-height: 100vh;
	border: 4px solid #000;
	position: relative;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
export const ConsoleFrame = styled.div`
	background: #f10db3;
	margin: 1.75em 1em 0 1em;
	height: 450px;
	border: solid 4px #000;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const BottomStyling = styled.div`
	height: 5vh;
	background: #f10db3;
	width: 100%;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
	align-self: center;

	@media (min-width: 667px) {
		width: 450px;
	}
`

export const StartButton = styled.button`
	background: transparent;
	border: none;
	width: 150px;
	z-index: 2;
	position: absolute;
	bottom: 7vh;
	left: 2vw;
	cursor: pointer;

	&:hover {
		transform: scale(1.2);
	}
`

export const StartButtonImg = styled.img`
	width: 200px;
`

export const LabelName = styled.label`
	color: #fff;
	text-align: center;
`
export const Span = styled.span`
	display: block;
	font-size: 28px;
`

export const GoBackBtnDiv = styled.div`
	align-self: center;
`

export const GoBackBtn = styled.button`
	border-radius: 50%;
	background: transparent;
	border: transparent;
	margin-top: 12px;

	&:hover {
		transform: scale(1.2);
	}
`

export const LabelDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
  position: absolute;
  bottom: 8vh;
  right: 3vw;
}
`

export const Logo = styled.h1`
	border: 2px solid #111111;
	font-family: inherit;
	text-transform: uppercase;
	padding: 5px;
	letter-spacing: 1px;
	-webkit-box-shadow: 5px 4px 2px 0px;
	box-shadow: 5px 4px 2px 0px;
	font-size: 20px;
`

export const ConsoleContent = styled.section`
	background: #fff;
	height: 380px;
	width: 90%;
	border-radius: 10px;
	border: 2px solid;
`
export const GameText = styled.p`
	font-size: 16px;
	color: #fff;
	padding: 0 1em 1em;
	text-align: center;

	@media (min-width: 667px) {
		font-size: 18px;
	}
`

export const GameTextHeader = styled.p`
	font-size: 22px;
	text-transform: uppercase;
	color: #fff;
	padding: 0 0.25em 1em;
	text-align: center;

	@media (min-width: 667px) {
		font-size: 24px;
	}
`

export const UsernameInput = styled.input`
	height: 35px;
	font-family: inherit;
	margin-top: 0.5em;
	border: 2px solid #202020;
	text-align: center;
`
export const UsernameInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1em;
	border-radius: 6px;
	justify-content: center;
	background: url(${BG1});
	background-size: cover;
	height: 100%;
`

export const Background = styled.div`
	background: url(${(props) => props.background});
	// background-size: cover;
	height: 95%;
	width: 95%;
	display: flex;
	border: 2px solid #000;
	border-radius: 6px;
	flex-direction: column;
	justify-content: center;
`

export const ButtonController = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	background: #fdb100;
	border: solid 2px #000;
	padding: 15px;
	border-radius: 50%;
	place-items: center;
	position: absolute;
	bottom: 7vh;
	left: 1vw;
	cursor: pointer;
`

export const Btn = styled.button`
	background: #f10db3;
	grid-area: ${(props) => props.position};
	width: 30px;
	height: 30px;
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 2px #000;
	border-bottom: ${(props) => (props.border === 'North' ? ' solid 2px #F10DB3' : '')};
	border-top: ${(props) => (props.border === 'South' ? ' solid 2px #F10DB3' : '')};
	border-left: ${(props) => (props.border === 'East' ? ' solid 2px #F10DB3' : '')};
	border-right: ${(props) => (props.border === 'West' ? ' solid 2px #F10DB3' : '')};
	border-top-left-radius: ${(props) => (props.border === 'North' ? ' 5px ' : '')};
	border-top-right-radius: ${(props) => (props.border === 'North' ? ' 5px ' : '')};
	border-bottom-right-radius: ${(props) => (props.border === 'East' ? ' 5px ' : '')};
	border-top-right-radius: ${(props) => (props.border === 'East' ? ' 5px ' : '')};
	border-bottom-left-radius: ${(props) => (props.border === 'South' ? ' 5px ' : '')};
	border-bottom-right-radius: ${(props) => (props.border === 'South' ? ' 5px ' : '')};
	border-top-left-radius: ${(props) => (props.border === 'West' ? ' 5px ' : '')};
	border-bottom-left-radius: ${(props) => (props.border === 'West' ? ' 5px ' : '')};
	animation: ${(props) => props.animation} 1s ease-in-out infinite;

	/* &:disabled {
			background: #C573AF;
		} */
`

export const MiddeBtn = styled(Btn)`
	grid-area: 2/2;
	width: 100%;
	height: 100%;
	position: relative;
	border: solid 2px #f10db3;

	&::after {
		content: '';
		width: 45px;
		height: 45px;
		background: #000;
		border-radius: 50%;
		position: absolute;
	}
`

export const Modal = styled.div`
	background: #fff;
	display: ${(props) => (props.text !== '' ? 'inline-block' : 'none')};
	position: absolute;
	text-align: center;
	border-radius: 10px;
	padding: 20px;
	width: 300px;
	height: 100px;
	left: 50%;
	top: 10%;
	transform: translate(-50%, 0%);
	z-index: 5;
	transform: all 0.4s ease;
`
