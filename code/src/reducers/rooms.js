// This reducer 

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  gameState: {
    description: "",
    coordinates: "",
    actions: []
  }
}

export const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    // Sets the username to the payload sent in (from CreateUsername.js)
    setUsername: (state, action) => {
      state.username = action.payload
    },

    setGameState: (state, action) => {
      const currentGameState = action.payload
      state.gameState = currentGameState
    },
  }
})

