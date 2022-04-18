import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import game, { fetchGame } from "reducer/game";

const Game = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const onChangeUserName = () => {
    dispatch(game.actions.setName(userName));
    dispatch(fetchGame());
  };

  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onChangeUserName}>Start</button>
    </>
  );
};

export default Game;
