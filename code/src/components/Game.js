import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import game, { fetchGame } from '../reducer/game'

const Game = () => {
	const [userName, setUserName] = useState('')

	const dispatch = useDispatch()
	console.log('game')

	const onChangeUserName = () => {
		dispatch(game.actions.setName(userName))
		setUserName('')
		dispatch(fetchGame())
	}

	const ConsoleContent = styled.section`
		background: #fff;
		height: 472px;
		width: 93%;
		border-radius: 10px;
		border: 2px solid;
	`
	const GameText = styled.p`
		font-size: 16px;
	`
	const UsernameInput = styled.input`
		height: 25px;
	`
	const UsernameInputContainer = styled.div`
		display: flex;
		justify-content: center;
	`

	return (
		<ConsoleContent>
			<GameText> Welcome to the a-maze-ing 80's! Try to found your way out of the labyrinth!</GameText>
			<UsernameInputContainer>
				<UsernameInput type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
				<button onClick={onChangeUserName}>Start</button>
			</UsernameInputContainer>
		</ConsoleContent>
	)
}

export default Game
