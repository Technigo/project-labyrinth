import { createSlice } from "@reduxjs/toolkit";

export const gameState = createSlice({
  name: "gameState",
  initialState: {
    gameDetails: {}, // coordinates: "", description: "", actions: [],
    userName: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    // startGame: (state, action) => {
    //   state.gameDetails = action.payload;
    //   console.log("payload: " + action.payload);
    //   console.log("userName: " + state.userName);
    //   console.log("coordinates: " + state.gameDetails.coordinates);
    //   console.log("description: " + state.gameDetails.description);
    //   console.log("actions: " + state.gameDetails.actions[0]);
    // },
    commitAction: (state, action) => {
      state.gameDetails = action.payload;
      console.log("Here now!" + action.payload);
    },
  },
});
