import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        <>
        <GameBackground backgroundImage={"../assets/img/image.png"}>

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
        onClick={onRestartGame}>Restart game</button>
        </GameCard>
        </GameBackground>
        </>
    )
}

const GameBackground = styled.div`
width: 100%;
height: 100vh;
background-image: url("${props => props.backgroundImage}");
background-size: cover;
background-position: center;
`

const GameCard = styled.section`
max-width:700px;
max-height: 200px;
position: absolute;
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #000;
opacity: 0.5;
padding: 20px;
text-align: center;
color: #fff;
font-family: 'Philosopher', sans-serif;
`
