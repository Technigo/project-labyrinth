import React from "react";
import { useDispatch } from "react-redux";

import { StartButton } from "styling/lib/Buttons";

export const StartLabyrinthButton = ({ action, text }) => {
  const dispatch = useDispatch();

  return (
    <StartButton type="button" onClick={(event) => dispatch(action(event))}>
      {text}
    </StartButton>
  );
};
