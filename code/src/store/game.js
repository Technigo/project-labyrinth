import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    name: '',
    state: ''
  },
  reducers: {
    setUserID(state) {
      state.name = uniqid();
    }
  }
});
export const { setUserID } = gameSlice.actions;
export default gameSlice.reducer;
