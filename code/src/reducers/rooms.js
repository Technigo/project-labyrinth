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
    setUsername: (state, action) => {
      console.log("Inne i setUsername-reducen")
      state.username = action.payload
    },

    setGameState: (state, action) => {
      console.log("Inne i setGameState")
      const currentGameState = action.payload
      state.gameState = currentGameState
    },
  }
})

