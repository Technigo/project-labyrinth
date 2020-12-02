import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getDescription } from 'reducers/gameInfo';
import { gameInfo } from 'reducers/gameInfo';
import { gameDetails } from 'reducers/gameDetails';

export const GameBegin = () => {
  const dispatch = useDispatch();
  const gameData = useSelector(store => store.gameDetails.gameDetails) 
//useselector for username
  console.log(gameData);

  const onGameBegin = () => {
    dispatch(getDescription());
  }
 
return(
<>
<div> Hello </div>
<div>{gameData.description}</div>
<button onClick={onGameBegin}>Play</button>
</>
)
}
