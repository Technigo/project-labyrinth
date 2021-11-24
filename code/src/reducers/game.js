import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    currentPosition: null,
    username: "",
    history: [],
  },
  reducers: {
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },

    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setHistory: (state, action) => {
      if (state.currentPosition) {
        state.history = [...state.history, action.payload];
      }
    },
  },
});

export const fetchStartGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.currentPosition(data)))
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};

export const continueGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.currentPosition(data));
        dispatch(game.actions.setHistory(data));
      })
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};
