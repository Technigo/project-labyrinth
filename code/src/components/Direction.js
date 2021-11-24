import React from "react";
import { continueLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";
import labyrinth from "reducers/Labyrinth";

export const Direction = ({ direction, setDirection }) => {
  const dispatch = useDispatch();

  const click = () => {
    dispatch(labyrinth.actions.setAction(direction));
    dispatch(continueLabyrinth());
  };

  return (
    <div>
      <button
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        onClick={click}
      >
        <p>{direction}</p>
      </button>
    </div>
  );
};
