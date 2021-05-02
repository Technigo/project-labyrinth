import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { games, createNewPlayer } from '../reducers/games'
import { Container } from '../styling/GlobalStyling'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        if (inputValue !== '') {
            dispatch(games.actions.setUserName(inputValue))
            dispatch(createNewPlayer(inputValue))
        } 
        setInputValue('')
    }

    return (
        <Container>
            <StartScreenContent onSubmit={onFormSubmit}>
                <StartScreenTitle>MAZE GAME</StartScreenTitle>
                <i className="snes-jp-logo"></i>
                <StartScreenText>
                    Welcome player! Enter your name and you shall enter the game
                </StartScreenText>
                <input
                    type="text"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    placeholder="Player name.."
                    className="nes-field"
                />
            </StartScreenContent>
            <button 
                className="nes-btn" 
                onClick={onFormSubmit}>
                    START
            </button>
        </Container>
    )
}

const StartScreenContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

const StartScreenTitle = styled.h1`
    margin: 30px 0 50px 0;
    font-size: 20px;
    color: #d3d3d3;
    text-align: center;
`

const StartScreenText = styled.p`
    margin: 0 0 50px 0;
    font-size: 16px;
    color: #d3d3d3;
    text-align: center;
`
export default StartScreen