import React, { useState } from "react";
import { useDispatch } from "react-redux";

import gameFetch, { firstFetch } from "../reducers/gameFetch";

const StartScreen = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(gameFetch.actions.setName(userName));
    dispatch(firstFetch(userName));
  };

  return (
    <div>
      <label>Welcome! Please enter your name:</label>
      <form>
        <input
          type='text'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </form>
      <button onClick={onStartGame}>Start!</button>
    </div>
  );
};

export default StartScreen;
