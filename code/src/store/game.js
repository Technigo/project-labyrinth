/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    user: {
      id: null,
      name: ''
    },
    state: 'Start',
    isLoading: false
  },
  reducers: {
    setUserID(state) {
      state.user.id = uniqid();
    },
    setState(state, action) {
      state.state = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});
export const { setUserID, setState, setLoading } = gameSlice.actions;
export default gameSlice.reducer;