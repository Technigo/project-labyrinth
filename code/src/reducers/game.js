import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    username: {},
    currentGameState: {},
    pastActions: [],
  },
  reducers: {
    addUserName: (store, action) => {
      const { username } = action.payload;
      store.username = username;
    },
    setCurrentGameState: (store, action) => {
      store.currentGameState = action.payload;
    },
  },
});
