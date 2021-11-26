import { createSlice } from "@reduxjs/toolkit";

// A reducer which with information from the payload sets what the currentScreen is.
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
