import React from "react";
import { useDispatch } from "react-redux";
import labyrinth from "../reducers/Labyrinth";

export const EndPage = () => {
  const dispatch = useDispatch();

  const onStartOver = () => {
    dispatch(labyrinth.actions.setLocation(null));
  };

  return (
    <section>
      <h1>Arrr, you found the treasure!</h1>
      <button onClick={onStartOver} type="button">
        Start over
      </button>
    </section>
  );
};
