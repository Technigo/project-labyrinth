import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gamestate } from '../reducers/gamestate'

import { GameBackground } from './StyledComponents/GameBackground';
import { GameCard } from './StyledComponents/GameCard';
import { RestartButton } from './StyledComponents/RestartButton';

import styled from 'styled-components';


export const TheEnd = () => {
  const dispatch = useDispatch();

  const username = useSelector((store) => store.gamestate.username)
  const gameStatus = useSelector(store => store.gamestate.currentChoice);

  const onRestartGame = () => {
    dispatch(gamestate.actions.setResetGame('')) //here is function to restartgame using empty state
  }

  return (
    <>
      <GameBackground backgroundImage={"../assets/img/theend-image.jpg"}>

        <GameCard><HeadText>Congratulations {username}, you finished the game!</HeadText>
          <Text>
            {gameStatus.description}
          </Text>

          <RestartButton
            onClick={onRestartGame}>
            Restart game
          </RestartButton>
        </GameCard>
      </GameBackground>
    </>
  );
};

const HeadText = styled.h2`
margin-top: 120px;
padding: 10px;
color: white;
text-shadow: 5px 5px 15px #003300;
font-size: 18px;
`
const Text = styled.h3`
color: white;
text-shadow: 5px 5px 15px #003300;
font-size: 18px;
`