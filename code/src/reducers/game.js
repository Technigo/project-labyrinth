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
    }
  }
})