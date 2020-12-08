import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

export const games = createSlice({
  name: 'games',
  initialState: {
    username: '',
    actions: [],
    description: '',
    coordinates: '',
    history: [],
    currentStep:{}
  },
  reducers: {

    history: state => {
      if (state.history.length > 0) {
        state.currentStep = state.history[state.history.length - 1]
        state.description = state.currentStep.description
        state.actions = state.currentStep.actions
        state.coordinates = state.currentStep.coordinates
        state.history = state.history.slice(0, state.history.length -1)
      }
    },	

    playGame: (store, action) => {
      store.currentStep = action.payload
      store.description = action.payload.description
      store.actions = action.payload.actions
      store.coordinates = action.payload.coordinates
    },

    continueGame: (store, action) => {
      store.history = [...store.history, store.currentStep]
      store.currentStep = action.payload
      store.description = action.payload.description
      store.actions = action.payload.actions
      store.coordinates = action.payload.coordinates
    },

    setUsername: (store, action) => {
      store.username = action.payload
    }
  }
})

export const thunk = (userName) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch(games.actions.playGame(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const actionThunk = (userName, action) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userName,
        type: action.type,
        direction: action.direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(games.actions.continueGame(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}