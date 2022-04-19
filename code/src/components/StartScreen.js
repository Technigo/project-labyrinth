import React, { useState } from "react";
import { useDispatch } from "react-redux";

import game from "reducers/game";

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onUsernameSelect = () => {
    dispatch(game.actions.setUsername(inputValue));
    fetch(
      `https://labyrinth-technigo.herokuapp.com/start?username${inputValue}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <p>Welcome to the labyrinth!</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={onUsernameSelect}>Start game!</button>
    </div>
  );
};
export default StartScreen;
