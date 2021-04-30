import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'
import { EndPage } from './EndPage'

import { labyrinth, generateGameProgress } from '../reducers/game'


const Container = styled.div`
    width: 900px;
    height: 450px;
    margin-top: 50px;
    
    @media (max-width: 768px) {
      height: 900px;
      margin-top: 20px;
     };
`

const ContinueGame = () => {
    const dispatch = useDispatch()
    const currentState = useSelector((state) => state);
    const playerName =  currentState.labyrinth.username;
    const actions = currentState.labyrinth.game.actions;


    const onGameContinue = (direction) => { 
        dispatch(generateGameProgress(playerName,direction));
      };
    
    // Function that gets invoked by clicking the back button
    const onGoBack = () => { 
      dispatch(labyrinth.actions.historyGoBack());
    };

    console.log("Current state of the game: ", currentState)

    if (actions.length === 0) { 
        return <EndPage/>
      };

    return ( 
        <Container className="nes-container is-dark with-title">
          <h3>{currentState.labyrinth.game.description}</h3>
          {actions.map((action)=> 
              <button type="button" class="nes-btn is-primary" key= {action.description} onClick={() => onGameContinue(action.direction)}> Go {action.direction}</button>
            )}
            <p>*HINT* {currentState.labyrinth.game.actions[0]?.description}</p>
          <button type="button" class="nes-btn is-error" onClick={onGoBack}>BACK</button>
        </Container>
    )
}

export default ContinueGame