import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game from '../reducer/game'
import Game from './Game'
import Labyrinth from './Labyrinth'
import styled from 'styled-components/macro'

const MainWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ConsoleContainer = styled.section`
	max-width: 450px;
	background: #905efc;
	height: 95vh;
	padding: 1.75em 1em 0 1em;
	border: 2px solid #000;
`
const ConsoleFrame = styled.div`
	background: #f10db3;
	height: 500px;
	border: solid 2px #000;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const BottomStyling = styled.div`
	position: absolute;
	bottom: 0;
	height: 5vh;
	background: #f10db3;
`

const StartPage = () => {
	const items = useSelector((store) => store.game.items)
	return (
		<MainWrapper>
			<ConsoleContainer>
				<ConsoleFrame>{items ? <Labyrinth /> : <Game />}</ConsoleFrame>
			</ConsoleContainer>
			<BottomStyling />
		</MainWrapper>
	)
}

export default StartPage
