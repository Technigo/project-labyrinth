import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  game: {},
  history: [],
  isGameStarted: false,
  isLoading: false,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    generateNextAction: (state, action) => {
      if (state.game) {
        state.history = [...state.history, state.game];
      }
      state.game = action.payload;
      state.isGameStarted = true;
    },
    addUsername: (state, action) => {
      state.name = action.payload;
    },
    historyGoBack: (state) => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length);
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
