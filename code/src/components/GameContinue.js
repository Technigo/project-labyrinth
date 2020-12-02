import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinth } from 'reducers/labyrinth';

import { generateGameProgress } from '../reducers/gameData';

export const GameContinue = () => { 
  const dispatch = useDispatch(); 
  const currentState = useSelector((state) => state);
  const playerName =  currentState.labyrinth.username;
  const actions = currentState.labyrinth.game.actions;
  

  const onGameContinue = (direction) => { 
    dispatch(generateGameProgress(playerName,direction));
  }

  const onGoBack = () => { 
    dispatch(labyrinth.actions.historyGoBack())
  }

  return(
    <>
      <h2>{currentState.labyrinth.game.description}</h2>
      {actions.map((action)=> 
     <button key={action.description} onClick={() => onGameContinue(action.direction)}>{action.direction}</button>
    )}
    <button onClick={onGoBack}>BACK </button>
    </>
  )
}