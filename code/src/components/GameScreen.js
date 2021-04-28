import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { continueGame } from '../reducers/game'

export const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData)
  const dispatch = useDispatch();
  const onContinueGame = (direction) => {
    dispatch(continueGame(direction))
  }


  if (gameData) {
    return (
      <>
        <button
          onClick={}
        >Run back!</button>
        <p>{gameData.coordinates}</p>
        <p>{gameData.description}</p>
        {gameData.actions.map(action => {
          return ( 
          <div>
            <h4>{action.description}</h4>
            <button
            onClick={() => onContinueGame(action.direction)}
            >
              {action.direction}
            </button>
          </div>
          )
        })}
      </>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
};

// export default GameScreen;
