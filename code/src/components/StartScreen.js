import React, { useState } from "react";
import { useDispatch } from "react-redux";

import game, { generateGameData } from "../reducers/game";

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onUsernameSet = () => {
    dispatch(game.actions.setUsername(inputValue));
    dispatch(generateGameData());
  };

  return (
    <div>
      <p>Wellcome to the Labyrinth! Please enter your name.</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={onUsernameSet}>Start the game!</button>
    </div>
  );
};

export default StartScreen;
