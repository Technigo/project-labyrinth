import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  currentStep: {},
  history: []
}

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    enterUsername: (state, action) => {
      state.username = action.payload
    },
    enterGame: (state, action) => {
      console.log(action.payload)
      state.currentStep = action.payload
    }
  }
})