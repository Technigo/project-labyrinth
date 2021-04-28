/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    currentRoom: {}
  },
  reducers: {
    setRoom(state, action) {
      state.currentRoom = { ...action.payload };
    }
  }
});
export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;

