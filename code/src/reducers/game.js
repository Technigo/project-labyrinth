/* eslint-disable linebreak-style */
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    coordinates: ''
  },
  reducers: {
    addPlayer: (store, action) => {
      store.username = [store.username, action.payload]
    }
  }
})