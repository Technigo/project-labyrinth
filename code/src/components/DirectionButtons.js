import React from "react";
import { useDispatch } from "react-redux";

export const DirectionButtons = ({ direction, action }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={(event) => dispatch(action.direction(event))} 
      direction={direction}>
      <p direction={direction}>Go {direction}</p>
    </button>
  );
};
