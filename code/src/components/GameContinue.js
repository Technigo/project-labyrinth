import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from 'reducers/game';

import { generateGameProgress } from '../reducers/gameData';

export const GameContinue = () => { 
  const dispatch = useDispatch(); 
  const CurrentState = useSelector((state) => state);
  // const historyState = state.game.history;
  const playerName =  CurrentState.game.username;
  const actions = CurrentState.game.game.actions;
  

  const onGameContinue = () => { 
    dispatch(generateGameProgress(playerName, actions.direction));
  };

  const onGoBack = () => { 
    dispatch(game.actions.historyGoBack());
  };

  return(
    <>
        <h2>{CurrentState.description}</h2>
      {actions.map((action)=> 
      <button key={action.description} onClick={onGameContinue}>{action.direction}</button>
    )}
    <button onClick={onGoBack}>BACK </button>
    </>
  );
};