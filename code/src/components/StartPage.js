import React, { useState } from "react";
import Labyrinth, { fetchLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";

export const StartPage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const start = () => {
    if (username === "") {
    } else {
      dispatch(Labyrinth.actions.setUsername(username));
      dispatch(fetchLabyrinth());
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username.length > 4 ? (
        <button onClick={start}> Welcome </button>
      ) : (
        <p>Fill in your name </p>
      )}
    </div>
  );
};
