import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const initialState = {
  username: "",
  currentPosition: "",
};

export const game = createSlice({
  name: "game",
  initialState,

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },

    restart: () => {
      return initialState;
    },
  },
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    };

    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentPosition(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        direction,
        type,
      }),
    };

    fetch("https://wk16-backend.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentPosition(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
