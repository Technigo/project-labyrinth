import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { game, fetchStartGame } from "../reducers/game";

export const StartGame = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(game.actions.setUsername(username));
    dispatch(fetchStartGame(username));
  };

  return (
    <div>
      <h1>Are you ready for an adventure?</h1>
      <p>Please enter your name</p>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={onStartGame}>START GAME</button>
      </div>
    </div>
  );
};
