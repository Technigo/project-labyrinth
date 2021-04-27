import React, { useState } from "react";
import { useDispatch } from "react-redux";

import gameFetch, { firstFetch } from "../reducers/gameFetch";

const StartScreen = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(gameFetch.actions.setName(userName));
    dispatch(firstFetch());
  };

  return (
    <div>
      <h1>Welcome! Please enter your name:</h1>
      <input
        type='text'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button onClick={onStartGame}>Start!</button>
    </div>
  );
};

export default StartScreen;
