import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name: "",
  game: {
  },
  isGameStarted: false
}

export const game = createSlice({
  name: 'game',
  initialState,

  reducers: {
    nextAction: (state, action) => {
      state.game = action.payload;
      console.log(action.payload)
      state.isGameStarted = true;
    },
    addUser: (state, action) => {
      state.name = action.payload
    }
  }
})