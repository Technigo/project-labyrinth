import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'
import { labyrinth, generateStartInstructions } from '../reducers/game'
import ContinueGame from "./ContinueGame"
import StartGame from "./StartGame"

const Container = styled.div`
    width: 900px;
    height: 300px;
`

const InitiateGame = () => {
    //controlled input we need states: 
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    const gameState = useSelector((state) => state.labyrinth.game);
    const playerName = useSelector((state) => state.labyrinth.username)
 
    const isStartingGame = () => { 
        return playerName && !gameState.coordinates;
      };

      const isContinuingGame = () => { 
        return playerName && gameState.coordinates;
      };
     
    const setGame = () => {
        //dispatching an action that takes the inputValue to change username
        dispatch(labyrinth.actions.setPlayerName(inputValue)) 
        //dispathing thunk function
        dispatch(generateStartInstructions(playerName))
    } 

    if (isStartingGame()) {
        return <StartGame/>
      } else if (isContinuingGame()) { 
        return <ContinueGame />
      };

    return (
        <Container className="nes-container is-dark with-title">
            <p className="title">Welcome to the labyrinth game</p>
            <p>Type in your unique username<i class="snes-jp-logo"></i></p>
            <input
                id="dark_field"
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                className="nes-input is-dark" 
                placeholder="e.g. Saraxx90"
            />
            <button type="button" className="nes-btn is-success" onClick={setGame}>Create Player</button>
        </Container>
    )
}

export default InitiateGame