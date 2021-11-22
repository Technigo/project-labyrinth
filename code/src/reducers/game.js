import { createSlice } from "@reduxjs/toolkit";
import { NEXT_MOVE, START_GAME } from "utils/urls";

import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    moves: [],
  },
  reducers: {
    nextMove: (store, action) => {
      store.moves = action.payload;
    },
  },
});

export const fetchGame = () => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "Lightwarrior" }),
  };
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(START_GAME, options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.nextMove(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
export const FetchNextMove = (direction) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Lightwarrior",
      direction: direction,
      type: "move",
    }),
  };
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(NEXT_MOVE, options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.nextMove(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
