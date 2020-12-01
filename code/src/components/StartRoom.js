//Here lives our username data and game initiation
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { game } from "../reducers/game";
import { generateAction } from "../reducers/reusable";

export const StartRoom = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(generateAction(userName));
  };

  const onChangeEvent = (value) => {
    dispatch(game.actions.addUsername(value));
  };

  return (
    <div>
      <p>Welcome {userName}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => onChangeEvent(event.target.value)}
          type="text"
          placeholder="enter your name here..."
          required
        />
        <button type="submit">Start game</button>
      </form>
    </div>
  );
};
