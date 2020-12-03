import { createSlice } from "@reduxjs/toolkit"

export const game = createSlice({
  name: 'gameplay',
  initialState: {
    username: {},
    all: [],
    history: [],
    pastActions: []
  },
  reducers: {
    addUserName: (state, action) => {
      const { username } = action.payload
      state.username = username
    },
    setGame: (state, action) => {
      state.history = [...state.history, state.all]
      console.log('History:',state.history)
      state.all = action.payload
    },
    historyGoBack: (state) => {
      if (state.history.length > 0) {
        state.all = state.history[state.history.length - 1]
        state.history = state.history.slice(0, state.history.length - 1)
      }

      // if (history.length > 0) {
      //   state.all = state.history[state.history.length - 1]
      //   state.history = state.all.slice(0, state.history.length - 1)
      // }
    },
    setPastActions: (state, action) => {
      console.log('Payload:',action.payload)
      state.pastActions = [...state.pastActions, action.payload]
    }
  }
})
