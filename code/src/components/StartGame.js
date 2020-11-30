import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { generateInstructions } from '../reducers/gameData';

export const StartGame = () => { 
  const dispatch = useDispatch(); 
  const gameState = useSelector((state) => state.game.game)

  console.log(gameState)

  const onStartGame = () => { 
    dispatch(generateInstructions());
  }
  return(
    <div>
      <div>{gameState.description}</div>
      <button onClick={onStartGame}> Start Game!</button>
    </div>
  )

}