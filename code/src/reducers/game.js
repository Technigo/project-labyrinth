import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: {},
  currentGameState: {},
  pastActions: [],
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    addUserName: (store, action) => {
      const { name } = action.payload;
      store.username = name;
    },
  },
});
