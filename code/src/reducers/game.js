import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name: "",
  game: {},
  isGameStarted: false,
  isLoading: false,
  isGameOver: false,
  history: []
}

export const game = createSlice({
  name: 'game',
  initialState,

  reducers: {
    nextAction: (state, action) => {
      state.game = action.payload;
      state.isGameStarted = true;
    },
    addUser: (state, action) => {
      state.name = action.payload
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    setHistory: (state, action) => {
      state.history = [...state.history, action.payload]
    },
    restartGame: (state, action) => {
      return initialState
    }
  }
})