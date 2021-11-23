import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../img/forest-background.jpeg';
import { gamestate, directionAnswer } from '../reducers/gamestate'

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
        // <GameBackground>
        // <img src={img} alt="forest-img">
    
        <GameCard>
           {gameStatus.description}
           {gameStatus.actions && gameStatus.actions.map((item, index) => ( //&& check if gameStatus is undefined. if false don't go further in game.
        <div key={index}>{item.description}
       
    
        <button
        value={item.direction}
        onClick={(event) => onChooseDirection(event)}> 
        {item.direction}
        </button>

        </div>
      ))}
      <button
        onClick={onRestartGame}>Restart game
        </button>
        </GameCard>
        // </GameBackground>
    )
}


export const GameBackground = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: red;
img {
width: 100%;
height: 100vh;
}
`

export const GameCard = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
text-align: center;
`