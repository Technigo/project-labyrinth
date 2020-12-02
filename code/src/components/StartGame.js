import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { generateStartInstructions } from '../reducers/gameData';

export const StartGame = () => { 
  const dispatch = useDispatch(); 
  const gameState = useSelector((state) => state.game.game)
  const playerName = useSelector((state)=>state.game.username)

  const onStartGame = () => { 
    dispatch(generateStartInstructions(playerName));
  }

    return(
    <>
      <h1>Hello {playerName} press the Start button to get your first instruction</h1>
        <div>
          <div>{gameState.description}</div>
          <button className="start-button" onClick={onStartGame}> Start Game!</button>
        </div>
    </>
  
  )

}