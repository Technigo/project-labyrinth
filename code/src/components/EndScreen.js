import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import gameFetch from "../reducers/gameFetch";

const EndScreen = () => {
  const userName = useSelector((store) => store.gameFetch.userName);
  const gameDescription = useSelector((store) => store.gameFetch.description);

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(gameFetch.actions.setName(null));
  };

  return (
    <>
      <p>Congratulations {userName}, you made it through the labyrinth!"</p>
      <button onClick={onRestart}>Restart</button>
    </>
  );
};

export default EndScreen;
