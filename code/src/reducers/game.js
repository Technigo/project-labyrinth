import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: "game",
  initialState: {
    userName: Math.random(),
    gameState:
      {},
    gameStarted: false
  },
  reducers: {
    setStartPosition: (state, action) => {
      state.gameState = action.payload;
      state.gameStarted = true;
    },
    setNextPosition: (state, action) => {
      state.gameState = action.payload
    }
  }
})