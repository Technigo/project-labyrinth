import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    username: null,
    started: false,
    position: { actions: [], coordinates: "", description: "" },
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload;
    },
    gameStarted: (store, action) => {
      store.started = action.payload;
    },
    gamePosition: (store, action) => {
      store.position = action.payload;
    },
  },
});

export const startGame = () => {
  return (dispatch, getState) => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().game.username }),
    };
    // if () {
    fetch("https://labyrinth-technigo.herokuapp.com/start", settings)
      .then((res) => res.json())
      .then(
        (data) => dispatch(game.actions.gamePosition(data)),
        dispatch(game.actions.gameStarted(true))
      );
    // }
  };
};
