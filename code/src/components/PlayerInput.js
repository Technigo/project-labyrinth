import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FetchLabyrinthButton } from "./FetchLabyrinthButton";

import { labyrinth } from "reducers/labyrinth";

export const PlayerInput = ({ setStartButtonVisible }) => {
  const dispatch = useDispatch();
  const [playername, setPlayername] = useState("");

  const handleNameChange = (event) => {
    setPlayername(event.target.value);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setPlayername(playername));
    setStartButtonVisible(true);
  };

  return (
    <div>
      <label>
        Who is playing?
        <input
          type="text"
          value={playername}
          onChange={(event) => handleNameChange(event)}
        ></input>
      </label>
      <FetchLabyrinthButton type="submit" onClick={(event) => handleSubmitName (event)}>
        Ready to start playing!
      </FetchLabyrinthButton>
    </div>
  );
};
