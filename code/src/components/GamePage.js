
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gamestate, directionAnswer } from '../reducers/gamestate'

import { GameBackground } from './StyledComponents/GameBackground';
import { GameCard } from './StyledComponents/GameCard';
import { RestartButton } from './StyledComponents/RestartButton';

import styled from 'styled-components';




export const GamePage = () => {
    const dispatch = useDispatch();
    const gameStatus = useSelector(store => store.gamestate.currentChoice); //here is function for GamePage and the currentChoice after selection direction on previus question


    const onChooseDirection = (event) => {
        dispatch(gamestate.actions.setDirection(event.target.value)) //here is function for the user to choose direction (North, West, what ever...)
        dispatch(directionAnswer())
      }

    const onRestartGame = () => {
        dispatch(gamestate.actions.setResetGame('')) //here is function to restartgame using empty state
    }

    return (
        <>
        <GameBackground backgroundImage={"../assets/img/ingame-img.jpg"}>

        <GameCard>
           {gameStatus.description}
           {gameStatus.actions && gameStatus.actions.map((item, index) => ( //&& check if gameStatus is undefined. if false don't go further in game.
        <div key={index}>{item.description}
       
    
        <DirectionButtons
        value={item.direction}
        onClick={(event) => onChooseDirection(event)}> 
        Go {item.direction}
        </DirectionButtons>

        </div>
      ))}
      
      <RestartButton
        onClick={onRestartGame}>Restart game</RestartButton>
        </GameCard>
        </GameBackground>
        </>
    )
}

const DirectionButtons = styled.button`
border-radius: 10px;
font-family: 'Philosopher', sans-serif;
font-size: 15px;
border:2px solid #fda; 
`