import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { labyrinth } from "../reducers/labyrinth";

const End = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((store) => store.labyrinth.initialState);
  const gamedescription = useSelector(
    (store) => store.labyrinth.gameStatus.description
  );
  const gamecoordinates = useSelector(
    (store) => store.labyrinth.gameStatus.coordinates
  );
  const onRestart = () => {
    dispatch(
      labyrinth.actions.restart({
        initialState,
      })
    );
  };
  return (
    <div className="main">
      <h1>{gamedescription}</h1>
      <h3>Your current position {gamecoordinates}</h3>
      <button onClick={() => onRestart()}>Restart game</button>
    </div>
  );
};

export default End;
