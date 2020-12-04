import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: "game",
  initialState: {
    userName: 0,
    gameState:
      {},
    gameStarted: false,
    isLoading: false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setStartPosition: (state, action) => {
      state.gameState = action.payload;
      state.gameStarted = true;
    },
    setNextPosition: (state, action) => {
      state.gameState = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
})