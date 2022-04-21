import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { labyrinth, startLabyrinth } from "../reducers/labyrinth";

const Start = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputAdd = () => {
    dispatch(labyrinth.actions.setUsername(input));
    dispatch(startLabyrinth());
  };
  return (
    <div>
      <h1>Welcome to the game</h1>
      <input
        type="text"
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        disabled={!input}
        onClick={() => {
          inputAdd();
        }}
      >
        Start game
      </button>
    </div>
  );
};

export default Start;
