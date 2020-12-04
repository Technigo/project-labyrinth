import { createSlice } from "@reduxjs/toolkit";

export const gameState = createSlice({
  name: "gameState",
  initialState: {
    gameDetails: {},
    userName: "",
    loader: false
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    commitAction: (state, action) => {
      state.gameDetails = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    }
  },
});
