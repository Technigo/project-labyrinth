import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    username: null,
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload;
    },
  },
});
