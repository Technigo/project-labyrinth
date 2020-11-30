import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  current: {},
  history: []
}

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    enterUsername: (state, action) => {
      console.log(action.payload)
      state.username = action.payload
    }
  }
})