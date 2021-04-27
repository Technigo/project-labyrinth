import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'
import game, { generateGame }from '../reducers/game'

export const Container = styled.div`
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 6px;
    background: #fff;
    width: 500px;
    height: 500px;
`

const StartGame = () => {
    //controlled input we need states: 
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
 
    const setGame = () => {
        //dispatching an action that takes the inputValue to change username
        dispatch(game.actions.setPlayerName(inputValue)) 
        //dispathing thunk function
        dispatch(generateGame())
    } 
    return (
        <Container>
            <p>Welcome to the labyrinth, type in your name </p>
            <input
                id="dark_field"
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                class="nes-input is-dark" 
                placeholder="dark.css"
            />
            <button onClick={setGame}>Start</button>
        </Container>
    )
}

export default StartGame

