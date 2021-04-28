/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    user: {
      id: uniqid(),
      name: 'GenericHero'
    },
    state: 'Start',
    isLoading: false
  },
  reducers: {
    setHeroName(state, action) {
      state.user.name = action.payload;
    },
    setState(state, action) {
      state.state = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});
export const { setHeroName, setState, setLoading } = gameSlice.actions;
export default gameSlice.reducer;