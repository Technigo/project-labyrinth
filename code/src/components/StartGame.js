import React from "react";
import { useDispatch } from "react-redux";

import { game, fetchStartGame } from "../reducers/game";

export const StartGame = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStartGame());
  };

  return (
    <div>
      <h1>Are you ready for an adventure?</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Please enter your name</p>
            <input type="text" required onChange={handleInputChange} />
            <button type="submit">START GAME</button>
          </label>
        </form>
      </div>
    </div>
  );
};
