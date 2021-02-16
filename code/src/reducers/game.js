import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameDetails: {},
  userName: "",
  isLoading: false,
  history: [],
  isGameStarted: false,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    nextStep: (state, action) => {
      state.isGameStarted = true;
      state.gameDetails = action.payload;
    },
    restartGame: (state, action) => {
      return initialState;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
