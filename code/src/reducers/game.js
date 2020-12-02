/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

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

export const fetchStart = (User) => {
  const START_API = 'https://wk16-backend.herokuapp.com/start/'

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(START_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: User })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
        console.log(json)
      })
  }
}

export const fetchNext = (User, direction) => {
  const NEXT_API = 'https://wk16-backend.herokuapp.com/action/'

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(NEXT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: User,
        type: "move",
        direction: direction }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
        console.log(json)
      })
  }
}