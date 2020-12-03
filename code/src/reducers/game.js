/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  currentStep: {},
  history: []
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload
    },
    setCurrentStep: (state, action) => {
      const stateNow = action.payload
      state.history = [...state.history, state.currentStep]
      state.currentStep = stateNow
    },
    back: (state, action) => {
      if (state.history.length > 0) {
        state.game = state.history[state.history.length -1]
        state.history = state.history.slice(0, state.history.length -1)
      }
    }
  }
})