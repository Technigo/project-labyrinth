import { createSlice } from "@reduxjs/toolkit";
import { STARTGAMEAPI, CONTINUEGAMEAPI } from "../utils/urls";
import { loading } from "./loading";

export const gameSteps = createSlice({
  name: "gameSteps",
  initialState: {
    username: "",
    gameStepList: [],
    gameHistory: [],
  },
  reducers: {
    setGameStep: (store, action) => {
      store.gameStepList = action.payload;
    },
    setUsername: (store, action) => {
      const { username } = action.payload;
      store.username = username;
    },
    setGameHistory: (store, action) => {
      const { direction } = action.payload;
      store.gameHistory = [...store.gameHistory, direction];
    },
  },
});

export const fetchGameData = (username) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true));
    fetch(STARTGAMEAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(gameSteps.actions.setGameStep(json));
      })
      .finally(() => dispatch(loading.actions.setLoading(false)));
  };
};

export const continueFetchGameData = (username, type, direction) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true));
    fetch(CONTINUEGAMEAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        type: type,
        direction: direction,
      }),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(gameSteps.actions.setGameStep(json));
        dispatch(gameSteps.actions.setGameHistory({ direction }));
      })
      .finally(() => dispatch(loading.actions.setLoading(false)));
  };
};
