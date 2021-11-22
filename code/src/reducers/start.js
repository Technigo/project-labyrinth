import { createSlice } from "@reduxjs/toolkit";

export const start = createSlice({
  name: "start",
  initialState: {
    startList: [{ name: "Hello" }],
  },
  reducers: {
    setStartList: (state, action) => {
      state.startList = action.payload;
    },
  },
});

export const fetchStart = () => {
  return (dispatch) => {
    // fetch API
  };
};
