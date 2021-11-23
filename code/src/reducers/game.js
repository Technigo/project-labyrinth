import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    gameList: {},
    username: "",
  },
  reducers: {
    setGameList: (state, action) => {
      state.gameList = action.payload;
    },

    setUsername: (state, action) => {
      state.username = action.payload;
      console.log("state", state);
      console.log("action", action);
    },
  },
});

export const fetchStartGame = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: `${state.game.username}` }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameList(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const continueGame = (type, direction) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${state.game.username}`,
        type: type,
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameList(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
