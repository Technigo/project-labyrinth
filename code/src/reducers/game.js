import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name: "",
  game: {
  }
}

export const game = createSlice({
  name: 'game',
  initialState,

  reducers: {
    nextAction: (state, action) => {
      state.game = action.payload;
      console.log(action.payload)
    },
    addUser: (state, action) => {
      state.name = action.payload
    }
  }
})