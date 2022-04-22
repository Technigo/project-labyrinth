import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game from '../reducer/game'
import Game from './Game'
import Labyrinth from './Labyrinth'
import ReturnBtn from './img/returnbtn.png'
import Logotype from './img/logo.png'
import {
	MainWrapper,
	ConsoleContainer,
	ConsoleFrame,
	BottomStyling,
	GoBackBtnImg,
	GoBackBtn,
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
				<GoBackBtn type='button' onClick={onRestartClick}>
					<GoBackBtnImg src={ReturnBtn} alt='click to restart'></GoBackBtnImg>
				</GoBackBtn>
				<Logo src={Logotype}></Logo>
				<BottomStyling />
			</ConsoleContainer>
		</MainWrapper>
	)
}

export default StartPage
