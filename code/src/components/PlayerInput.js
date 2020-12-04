import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { labyrinth } from "reducers/labyrinth";

export const PlayerInput = ({ setStartButtonVisible }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUsername(username));
    setStartButtonVisible(true);
  };

  return (
    <div>
      <label>
        Who is playing?
        <input
          type="text"
          value={username}
          onChange={(event) => handleNameChange(event)}
        ></input>
      </label>
      <button type="submit" onClick={(event) => handleSubmitName(event)}>
        Ready to start playing!
      </button>
    </div>
  );
};
