import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getDescription } from 'reducers/gameInfo';
import { Buttons } from 'components/Buttons';
import { gameInfo } from 'reducers/gameInfo';
import { gameDetails } from 'reducers/gameDetails';

export const GameBegin = () => {
  const dispatch = useDispatch();
  const gameData = useSelector(store => store.gameDetails.gameDetails) 
  
//useselector for username
  console.log(gameData);

  //userName is undefinied
  const onGameBegin = () => {
    const userName = Math.random().toString();
    dispatch(gameDetails.actions.setUserName(userName))
    dispatch(getDescription(userName));
    dispatch(gameDetails.actions.startGame());
  }
  const gameOn = useSelector(store => store.gameDetails.gameStarted)

return(
<div>
    {!gameOn ? (
  <>
    <div> Hello </div>
    <button onClick={onGameBegin}>Play</button> 
  </>
  ) : (
  <>
    <div>Game over</div>
      {gameData.description && <Buttons />} 
  </>
  ) 
  } 
</div>
)
}
