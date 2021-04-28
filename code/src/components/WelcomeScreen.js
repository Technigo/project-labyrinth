import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import game, { generateGame } from '../reducers/game'

export const WelcomeScreen = () => {
  const userName = useSelector((store) => store.game.userName);
  const dispatch = useDispatch();

  const onGameStartSet = (event) => {
    event.preventDefault();
    // dispatch(game.actions.setUserName(value))
    dispatch(generateGame(userName));
    dispatch(game.actions.setGameStart(true))
  };
     
  return (
    <div>
      <p>Welcome {userName} to the welcome screen</p>
      <button onClick={onGameStartSet}> Start the game</button>
    </div>
  );
};
