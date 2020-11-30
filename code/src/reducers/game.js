import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    game: 
      {username: "Kat",
      direction: "North"}
    ,
    history: []
  },
  reducers: {
    generateDirection: (state, action)=> {
      if (state.game.game) {
        state.history = [...state.history, state.game]
      }
      state.game = action.payload
    },
    historyGoBack: (state, action) => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length - 1]
        state.history = state.history.slice(0, state.history.length - 1)
    }
  }
}
})

