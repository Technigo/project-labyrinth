import React from "react";
import { useDispatch } from "react-redux";

export const StartLabyrinthButton = ({ action, text }) => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={(event) => dispatch(action(event))}>
      {text}
    </button>
  );
};
