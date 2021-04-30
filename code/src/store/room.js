import { createSlice } from '@reduxjs/toolkit';
import { load } from './localStorage';

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    saved: load({ namespace: 'room' }) || {
      currentRoom: {},
      history: []
    },
    actions: {
      selected: {}
    }
  },
  reducers: {
    setRoom(state, action) {
      state.saved.history.push(action.payload.coordinates);
      state.saved.history = state.saved.history.filter((a, b) => a !== b);
      state.saved.currentRoom = { ...action.payload };
      state.actions.selected = {};
    },
    clearRoom(state) {
      state.saved.history = [];
      state.saved.currentRoom = {};
    },
    setAction(state, action) {
      state.actions.selected = { ...action.payload };
    }
  }
});
export const { setRoom, clearRoom, setAction } = roomSlice.actions;
export default roomSlice.reducer;
