import { createSlice } from "@reduxjs/toolkit";
import { STARTGAMEAPI } from "../utils/urls";

export const gameSteps = createSlice({
  name: "gameSteps",
  initialState: {
    username: "",
    gameStepList: [],
  },
  reducers: {
    setGameStep: (state, action) => {
      state.gameStepList = action.payload;
    },
    setUsername: (state, action) => {
      const { username } = action.payload;
      state.username = username;
    },
  },
});

export const fetchGameData = (username) => {
  return (dispatch) => {
    fetch(STARTGAMEAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(gameSteps.actions.setGameStep(json));
      });
  };
};
