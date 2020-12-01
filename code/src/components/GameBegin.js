import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { generateDescription } from 'reducers/gameInfo';
import { generateMoves } from 'reducers/gameInfo';
import { gameInfo } from 'reducers/gameInfo';
import { gameDetails } from 'reducers/gameDetails';
//import { Button } from "./Button,js"

export const GameBegin = () => {
  const dispatch = useDispatch();
  const gameData = useSelector(store => store.gameDetails.gameDetails) 

  console.log(gameData);

  const onGameBegin = () => {
    dispatch(generateDescription());
  }
  // const onGameContinue = () => {
  //   dispatch(generateMoves());
  // }

return(
<>
<div> Hello </div>
<div>{gameData.description}</div>
  {/* {gameData.actions.map(item => 
        key={item.index}
        direction = {item.direction}>
        }*/
<button onClick={onGameBegin}>Play</button>
/* <div>{gameData.actions} */}
{/* <button onClick={onGameContinue}>Continue</button></div> */}
</>
)
}
