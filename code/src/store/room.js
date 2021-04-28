/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { load } from './localStorage';

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    currentRoom: load({ namespace: 'room' }) || {}
  },
  reducers: {
    setRoom(state, action) {
      state.currentRoom = { ...action.payload };
    }
  }
});
export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;

