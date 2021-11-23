import { createSlice } from "@reduxjs/toolkit";
import { GAME_START, GAME_ACTION } from "../utils/urls";
import { loader } from "./loader";

const game = createSlice({
  // every slice needs 3 properties: name, initialState and reducer
  name: "game",
  // initalstate is always an object
  initialState: {
    gameStatus: "",
    userName: " ",
    history: [],
  },
  // Each reducer is a property which is a function
  // an object where each property is one method to update the store
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setGameStatus: (state, action) => {
      const currentGameStatus = action.payload;
      state.history = [...state.history, state.gameStatus];
      state.gameStatus = currentGameStatus;
    },
    SetGoBack: (state, action) => {
      if (state.history.length > 0) {
        state.gameStatus = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
      }
    },
  },
});

//Fetching the game start and dispatching loader while waiting for fetch
export const fetchGame = (userName) => {
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true));
    fetch(GAME_START, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName }), //check options here
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameStatus(json));
        dispatch(loader.actions.setLoading(false)); //Finally?
      });
  };
};

export const fetchNextMove = (userName, direction) => {
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true));
    fetch(GAME_ACTION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        type: "move",
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameStatus(json));
        dispatch(loader.actions.setLoading(false));
      });
  };
};

export default game;
