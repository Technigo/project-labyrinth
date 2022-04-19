import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { game } from "reducers/game";
import { startGame } from "reducers/game";

const Start = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const setUser = () => {
    dispatch(game.actions.setUser(username));
    dispatch(startGame());
    // const settings = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username: username }),
    // };
    // fetch("https://labyrinth-technigo.herokuapp.com/start", settings)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  return (
    <div>
      <p>Welcome to The Game.</p>
      <p>Please enter your username:</p>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
        onKeyDown={(e) => e.key === "Enter" && setUser()}
      />
      <button onClick={setUser}>Start Game</button>
    </div>
  );
};

export default Start;
