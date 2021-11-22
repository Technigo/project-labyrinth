import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    gameList: [],
  },
  reducers: {
    setGameList: (state, action) => {
      state.gameList = action.payload;
    },
  },
});

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start")
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameList(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
