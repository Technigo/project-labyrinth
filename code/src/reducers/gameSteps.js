import { createSlice } from "@reduxjs/toolkit";
import { STARTGAMEAPI } from "../utils/urls";

export const gameSteps = createSlice({
  name: "gameSteps",
  initialState: {
    username: "",
    gameStepList: [],
  },
  reducers: {
    setGameStep: (store, action) => {
      store.gameStepList = action.payload;
    },
    setUsername: (store, action) => {
      const { username } = action.payload;
      store.username = username;
    },
  },
});

export const fetchGameData = (name) => {
  return (dispatch) => {
    fetch(STARTGAMEAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name }),
    })
      .then((results) => results.json())
      .then((json) => {
        console.log(json);
      });
  };
};
