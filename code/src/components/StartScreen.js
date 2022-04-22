import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import game, { generatePlayerName } from '../reducers/game'

const Container = styled.div`
    display: flex;
	align-items: center;
	flex-direction: column;
    margin-top: 3rem;
`

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onPlayerSet = () => {
        dispatch(game.actions.setPlayer(inputValue))
        dispatch(generatePlayerName())
    }

    return (
        <Container>
        <div class="nes-container is-dark with-title">
        <p class="title">Welcome to our labyrinth game</p>
            <div class="nes-field">
            <label for="name_field">Hi Player! Your name</label>
            <input
                type="text"
                id="name_field"
                class="nes-input"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            </div>
            <button type="button" class="nes-btn is-primary"
            onClick={onPlayerSet}>Start game!</button>
        </div>
        </Container>
    )
}

export default StartScreen
