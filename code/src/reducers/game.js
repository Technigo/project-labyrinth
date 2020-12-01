import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  currentStep: {},
  history: [],
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    enterUsername: (state, action) => {
      state.username = action.payload;
    },
    enterGame: (state, action) => {
      state.currentStep = action.payload;
    },
    takeNextStep: (state, action) => {
      console.log(action.payload);
      state.history = [...state.history, state.currentStep];
      state.currentStep = action.payload;
    },
  },
});
