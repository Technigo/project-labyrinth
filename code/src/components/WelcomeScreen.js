import React from "react";
import { useSelector, useDispatch } from "react-redux";

import game, { generateGame } from "../reducers/game";

export const WelcomeScreen = () => {
  const userName = useSelector((store) => store.game.userName);
  const dispatch = useDispatch();

  const onGameStartSet = (event) => {
    event.preventDefault();
    // dispatch(game.actions.setUserName(value))
    dispatch(generateGame(userName));
    dispatch(game.actions.setGameStart(true));
  };

  return (
    <div>
      <p>
        Welcome <span className="nes-text is-success">{userName}!</span> are you
        ready for an adventure filled with romance, mystery and possibly some
        bugs?
      </p>
      <button onClick={(event) => onGameStartSet(event)}>Yes I am!</button>
    </div>
  );
};
