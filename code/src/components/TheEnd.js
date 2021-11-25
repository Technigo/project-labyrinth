import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isStyledComponent } from 'styled-components';
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
          <HeadText>
            {gameStatus.description}
          </HeadText>

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
color: rgba(0,0,0,0.6);
text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
`