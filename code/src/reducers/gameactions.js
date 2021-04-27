import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

const gameactions = createSlice({
  name: 'gameactions',
  initialState: {
    descripton: null,
    actions: null
  },
  reducers: {
    setDescription: (store, action) => {
      store.descripton = action.payload
    },
    setActions: (store, action) => {
      store.actions = action.payload
    }
  }
})

export default gameactions
