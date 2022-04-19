import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    username: null,
    started: false,
    position: { actions: [], coordinates: "", description: "" },
    loading: true,
    direction: "",
    type: "",
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
    isLoading: (store, action) => {
      store.loading = action.payload;
    },
    setDirection: (store, action) => {
      console.log("setDirection", action.payload);
      store.direction = action.payload;
    },
    setType: (store, action) => {
      console.log("setType", action.payload);
      store.type = action.payload;
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
        dispatch(game.actions.gameStarted(true)),
        dispatch(game.actions.isLoading(false))
      );
    // }
  };
};

export const playerAction = () => {
  return (dispatch, getState) => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: getState().game.username,
        type: getState().game.type,
        direction: getState().game.direction,
      }),
    };
    fetch("https://labyrinth-technigo.herokuapp.com/action", settings)
      .then((res) => res.json())
      .then(
        (data) => dispatch(game.actions.gamePosition(data)),
        dispatch(game.actions.gameStarted(true)),
        dispatch(game.actions.isLoading(false))
      );
  };
};
