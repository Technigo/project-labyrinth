import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { game } from "../reducers/game";
import { startGameFetch } from "../reducers/reusable";

import { Centred } from '../lib/Styling';

export const Start = () => {
  const [username, setUsername] = useState("");
  const stateUsername = useSelector((state) => state.game.username);
  const dispatch = useDispatch();

  const onUsernameChange = (event) => {
    dispatch(game.actions.enterUsername(username));
    dispatch(startGameFetch(username));
    event.preventDefault();
  };

  return (
    <>
      {!stateUsername && (
        <Centred>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <button
            type="button"
            onClick={onUsernameChange}>
            Submit
          </button>
        </Centred>
      )}
    </>
  );
};
