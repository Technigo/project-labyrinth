import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  currentStep: {},
  history: [],
  stepCounter: 0
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
      state.stepCounter += 1;
    },

    takeNextStep: (state, action) => {
      state.history = [...state.history, state.currentStep];
      state.currentStep = action.payload;
      state.stepCounter += 1;
    },

    oneStepBack: (state, action) => {
      if (state.history.length > 0) {
        state.currentStep = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
        state.stepCounter += 1;
      } else {
        alert('You need to take a step before you can go back')
      }
    },
  },
});
