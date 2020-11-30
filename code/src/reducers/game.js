import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  game: {}
}
export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    nextAction: (state, action) => {
      state.game = action.payload;
      console.log(action.payload)
    }
  }
})