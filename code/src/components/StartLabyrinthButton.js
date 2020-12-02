import React from "react";
import { useDispatch } from "react-redux";

import { fetchLabyrinthData } from "reducers/labyrinth";

export const StartLabyrinthButton = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(fetchLabyrinthData())}>
      Go!
    </button>
  );
};
