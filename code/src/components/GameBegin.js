import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { generateDescription } from 'reducers/gameInfo';
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

return(
  <div>
<div> Hello 
<div>{gameData.description}</div>
{/* <div>{gameData.actions.map(item => 
    <Button key={item.direction}
          direction = {item.direction}></Button>
        )}</div> */}
<button onClick={onGameBegin}>Play</button>
</div>
</div>
)
}
