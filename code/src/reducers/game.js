import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  game: [],
  isGameStarted: false
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    generateAction: (state, action) => {
      state.game = action.payload
      console.log(action.payload)
      state.isGameStarted = true
    },
    addUsername: (state, action) => {
      state.name = action.payload
    }
  }
})
