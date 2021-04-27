import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'
import game, { generateGame }from '../reducers/game'





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
        <div>
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
        </div>
    )
}

export default StartGame

