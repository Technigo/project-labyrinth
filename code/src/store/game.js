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
    },
    startGame(state) {
      state.state = 'Room';
    },
    restartGame(state) {
      state.state = 'Start';
    }
  }
});
export const { setUserID, startGame, restartGame } = gameSlice.actions;
export default gameSlice.reducer;
