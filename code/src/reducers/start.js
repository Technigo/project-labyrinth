import { createSlice } from "@reduxjs/toolkit";
import { loader } from "./loader";

export const start = createSlice({
  name: "start",
  initialState: {
    // Jag har lagt till alla delar man behöver från apin nedanför samt satt 2 reducers som vi kan dispatcha de olika stegen i spelet.
    username: "",
    gameObject: {
      coordinates: "",
      description: "",
      actions: [],
    },
  },
  reducers: {
    setGameObject: (state, action) => {
      state.gameObject = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

// Vi var rätt på det med att det var här vi skulle importa APIn. Har bara lagt till lite delar än så länge.

export const fetchStart = username => {
  return dispatch => {
    dispatch(loader.actions.setLoading(true));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    };

    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then(res => res.json())
      .then(json => {
        dispatch(game.actions.setGameObject(json));
        dispatch(loader.actions.setLoading(false));
      });
  };
};
