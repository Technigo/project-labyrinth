import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    user: {
      id: null,
      name: ''
    },
    state: 'Start'
  },
  reducers: {
    setUserID(state) {
      state.user.id = uniqid();
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
