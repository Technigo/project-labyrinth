import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gamestate } from '../reducers/gamestate'

import { GameBackground } from './StyledComponents/GameBackground';
import { GameCard } from './StyledComponents/GameCard';
import { RestartButton } from './StyledComponents/RestartButton';


export const TheEnd = () => {
  const dispatch = useDispatch();

  const username = useSelector((store) => store.gamestate.username)
  const gameStatus = useSelector(store => store.gamestate.currentChoice);

  const onRestartGame = () => {
    dispatch(gamestate.actions.setResetGame('')) //here is function to restartgame using empty state
  }

  return (
    <>
      <GameBackground backgroundImage={"../assets/img/image.png"}>

        <GameCard><p>Congratulations {username}, you finished the game!</p>
          {gameStatus.description}
          <RestartButton
            onClick={onRestartGame}>
            Restart game
          </RestartButton>
        </GameCard>
      </GameBackground>
    </>
  );
};