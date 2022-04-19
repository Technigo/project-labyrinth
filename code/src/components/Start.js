import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { labyrinth } from "reducers/labyrinth";

const Start = () => {
  const [input, setInput] = useState("");
  const Dispatch = useDispatch();
  const inputAdd = () => {
    Dispatch(labyrinth.actions.setUsername(input));
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
      <button onClick={inputAdd}>Start game</button>
    </div>
  );
};

export default Start;
