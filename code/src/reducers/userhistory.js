import { createSlice } from '@reduxjs/toolkit';

export const userhistory = createSlice({
  name: 'userhistory',
  initialState: {
    moves: []
  },

  reducers: {
    addMove: (state, action) => {
      state.moves.push(action.payload);
    },
    clearMoves: (state) => {
      state.moves = [];
    }
  }
})
