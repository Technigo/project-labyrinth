
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gamestate, directionAnswer } from '../reducers/gamestate'

import { GameBackground } from './StyledComponents/GameBackground';
import { GameCard } from './StyledComponents/GameCard';
import { RestartButton } from './StyledComponents/RestartButton';
import { DirectionButtons } from './StyledComponents/DirectionButtons';

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
          <HeadText>{gameStatus.description}</HeadText>

          {gameStatus.actions && gameStatus.actions.map((item, index) => ( //&& check if gameStatus is undefined. if false don't go further in game.
            <Text key={index}>
              {item.description}

              <DirectionButtons
                value={item.direction}
                onClick={(event) => onChooseDirection(event)}>
                Go {item.direction}
              </DirectionButtons>
            </Text>
          ))}

          <RestartButton
            onClick={onRestartGame}>Restart game</RestartButton>
        </GameCard>
      </GameBackground>
    </>
  )
}


const HeadText = styled.section`
text-align: center;
font-size: 22px;
margin: auto auto;
color: #fff;
font-weight: 700;
padding: 0px 30px 20px 30px;
text-shadow: 5px 5px 15px #003300;

@media (max-width: 768px) {
  margin-top: 40px;
  font-size: 16px;
}
`

const Text = styled.section`
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 18px;
color: #fff;
padding: 0px 30px 0px 30px;
text-shadow: 10px 5px 15px #003300;
@media (max-width: 768px) {
  font-size: 15px;
}
`
