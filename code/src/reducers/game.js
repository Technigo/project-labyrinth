import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    username: "",
    currentGameState: {},
    coordinatesArray: [],
    pastActions: [],
    positionHistory: [],
    squares: ["0,3", "1,3", "0,2", "1,2", "0,1", "1,1", "0,0", "1,0"],
  },
  reducers: {
    addUserName: (store, action) => {
      const { username } = action.payload;
      store.username = username;
    },
    setCurrentGameState: (store, action) => {
      store.positionHistory = [
        ...store.positionHistory,
        store.currentGameState,
      ];
      store.currentGameState = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinatesArray = [...store.coordinatesArray, action.payload];
    },
    restartGame: store => {
      store.username = "";
      store.currentGameState = {};
      store.pastActions = [];
    },
    setPastActions: (store, action) => {
      store.pastActions = [...store.pastActions, action.payload];
    },
  },
});
