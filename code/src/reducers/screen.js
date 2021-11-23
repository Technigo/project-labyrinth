import { createSlice } from "@reduxjs/toolkit";

export const screen = createSlice({
  name: "screen",
  initialState: {
    currentScreen: "username",
  },
  reducers: {
    currentScreen: (state, action) => {
      const { screen } = action.payload;
      state.currentScreen = screen;
    },
  },
});
