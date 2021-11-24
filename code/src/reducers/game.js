import { createSlice } from "@reduxjs/toolkit";
import { GAME_START, GAME_ACTION } from "../utils/urls";
import { loader } from "./loader";

const game = createSlice({
  // every slice needs 3 properties: name, initialState and reducer
  name: "game",
  // initalstate is always an object
  initialState: {
    userName: " ",
    gameStatus: " ",
    history: [],
  },
  // Each reducer is a property which is a function
  // an object where each property is one method to update the store
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    setGoBack: (state, action) => {
      if (state.history.length > 0) {
        state.gameStatus = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
      }
    },
  },
});

//Fetching the game start and dispatching loader while waiting for fetch
export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true));
    fetch(GAME_START, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().game.userName }), //check options here
    })
      .then((res) => res.json())
      .then((json) => dispatch(game.actions.setGameStatus(json)))
      .finally(() => dispatch(loader.actions.setLoading(false)));
  };
};

export const fetchNextMove = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true));
    fetch(GAME_ACTION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: getState().game.userName,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameStatus(json));
        dispatch(game.actions.setGoBack(json));
      })
      .finally(() => dispatch(loader.actions.setLoading(false)));
  };
};

export default game;
