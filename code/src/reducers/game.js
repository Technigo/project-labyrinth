import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    currentPosition: null,
    username: null,
    history: [],
  },
  reducers: {
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },

    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setHistory: (store, action) => {
      if (store.currentPosition) {
        store.history = [...store.history, action.payload];
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
      .then((data) => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)));
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
        dispatch(game.actions.setCurrentPosition(data));
        dispatch(game.actions.setHistory(data));
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};
