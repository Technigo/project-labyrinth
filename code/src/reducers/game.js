/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    coordinates: ''
  },
  reducers: {
    addPlayer: (store, action) => {
      store.username = action.payload
    }
  }
})