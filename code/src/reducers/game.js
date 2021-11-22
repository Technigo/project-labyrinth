import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";
import uniqid from "uniqid";

const game = createSlice({
  name: "game",
  initialState: {
    choices: [],
  },
  reducers: {
    startGame: (store, action) => {
      store.choices = action.payload;
    },
  },
});

export const fetchGame = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "Epic Knight" }),
  };

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then(() => {
        dispatch(game.actions.startGame());
        dispatch(ui.actions.setLoading(false));
      })
      .finally(() => {
        dispatch(game.actions.showDescription());
      });
  };
};

export default game;
