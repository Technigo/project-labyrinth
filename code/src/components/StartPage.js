import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import game from '../reducer/game'
import Game from './Game'
import Labyrinth from './Labyrinth'

import ReturnBtn from './img/returnbtn.svg'
import Logotype from './img/logo.png'
import Music from './img/music.mp3'
import {
	MainWrapper,
	ConsoleContainer,
	ConsoleFrame,
	BottomStyling,
	GoBackBtnImg,
	GoBackBtn,
	PlayBtn,
	Logo,
} from './Styling'

const StartPage = () => {
	const [playMusic, setPlayMusic] = useState(false)
	const items = useSelector((store) => store.game.items)
	const dispatch = useDispatch()

	const onRestartClick = () => {
		dispatch(game.actions.restartGame())
	}

	// BACKGROUND MUSIC
	const audioElement = new Audio(Music)

	const controlMusic = () => {
		audioElement.play()
		setPlayMusic(false)
	}

	//			<button onClick={() => audioElement.play()} onDoubleClick={() => audioElement.pause()}>Play</button>

	console.log(playMusic)
	return (
		<MainWrapper>
			<ConsoleContainer>
				<ConsoleFrame>{items ? <Labyrinth /> : <Game />}</ConsoleFrame>
				<GoBackBtn type='button' onClick={onRestartClick}>
					<GoBackBtnImg src={ReturnBtn} alt='click to restart'></GoBackBtnImg>
				</GoBackBtn>
				<PlayBtn onClick={() => controlMusic()}>▶</PlayBtn>
				<Logo src={Logotype}></Logo>
				<BottomStyling />
			</ConsoleContainer>
		</MainWrapper>
	)
}

export default StartPage
