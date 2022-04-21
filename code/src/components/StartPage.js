import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game from '../reducer/game'
import Game from './Game'
import Labyrinth from './Labyrinth'
import ReturnBtn from './img/returnbtn.svg'
import {
	MainWrapper,
	ConsoleContainer,
	ConsoleFrame,
	BottomStyling,
	GoBackBtnDiv,
	GoBackBtn,
	LabelDiv,
	Logo,
} from './Styling'

const StartPage = () => {
	const items = useSelector((store) => store.game.items)
	const dispatch = useDispatch()

	const onRestartClick = () => {
		dispatch(game.actions.restartGame())
	}
	return (
		<MainWrapper>
			<ConsoleContainer>
				<ConsoleFrame>{items ? <Labyrinth /> : <Game />}</ConsoleFrame>
				<LabelDiv>
					<GoBackBtnDiv>
						<GoBackBtn type='button' onClick={onRestartClick}>
							<img src={ReturnBtn} alt='click to restart'></img>
						</GoBackBtn>
					</GoBackBtnDiv>
					<Logo>play girl</Logo>
				</LabelDiv>
				<BottomStyling />
			</ConsoleContainer>
		</MainWrapper>
	)
}

export default StartPage
