import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from 'reducers/game';

import { generateGameProgress } from '../reducers/gameData';

export const GameContinue = () => { 
  const dispatch = useDispatch(); 
  const state = useSelector((state) => state);
  const historyState = state.game.history;
  const playerName =  state.game.username;
  const actions = state.game.game.actions;
  

  const onGameContinue = () => { 
    dispatch(generateGameProgress(playerName));
  }

  const onGoBack = () => { 
    dispatch(game.actions.historyGoBack())
  }

  return(
    <>
    {actions.map((action)=> 
      <button key={action.description} onClick={onGameContinue}>{action.direction}</button>
    )}
    <button onClick={onGoBack}>BACK </button>
    </>
  )

}