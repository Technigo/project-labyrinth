/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { load } from './localStorage';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    user: load({ namespace: 'user' }) || {
      id: uniqid(),
      name: 'GenericHero',
      state: 'Start'
    },
    isLoading: false
  },
  reducers: {
    setHeroName(state, action) {
      state.user.name = action.payload;
    },
    setState(state, action) {
      state.user.state = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    restartGame(state) {
      state.user.state = 'Start';
      state.user.id = uniqid();
    }
  }
});
export const { setHeroName, setState, setLoading, restartGame } = gameSlice.actions;
export default gameSlice.reducer;
