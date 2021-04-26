import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    name: ''
  },
  reducers: {
    action(state) {
      state.name = uniqid();
    }
  }
});
export const { action } = gameSlice.actions;
export default gameSlice.reducer;
