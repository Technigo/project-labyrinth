import React from "react"
import { useDispatch } from "react-redux";

export const DirectionButton = ({ direction, action }) => {
  const dispatch = useDispatch();

  return (
    <DirectionButton type="button" onClick={(event) => dispatch (action(event))}>
      direction={direction}
    </DirectionButton>
  );
};
